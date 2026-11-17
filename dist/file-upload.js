"use client";

// src/file-upload/index.tsx
import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect
} from "react";
import clsx from "clsx";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var FileUploadContext = createContext(null);
function useFileUpload() {
  const ctx = useContext(FileUploadContext);
  if (!ctx) throw new Error("FileUpload components must be used inside <FileUpload.Root>");
  return ctx;
}
function Root({
  multiple = false,
  accept = ["image/jpeg", "image/png", "image/webp"],
  maxSize,
  onChange,
  disabled = false,
  children,
  className,
  style
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const validate = useCallback(
    (file) => {
      if (accept.length > 0 && !accept.includes(file.type)) return false;
      if (maxSize !== void 0 && file.size > maxSize) return false;
      return true;
    },
    [accept, maxSize]
  );
  const addFiles = useCallback(
    (incoming) => {
      const arr = Array.from(incoming).filter(validate);
      if (arr.length === 0) return;
      setFiles((prev) => {
        if (!multiple) prev.forEach((f) => URL.revokeObjectURL(f.preview));
        const added = arr.map((f) => ({ file: f, preview: URL.createObjectURL(f) }));
        const next = multiple ? [...prev, ...added] : added;
        onChange?.(next.map((f) => f.file));
        return next;
      });
    },
    [multiple, validate, onChange]
  );
  const removeFile = useCallback(
    (index) => {
      setFiles((prev) => {
        URL.revokeObjectURL(prev[index].preview);
        const next = prev.filter((_, i) => i !== index);
        onChange?.(next.map((f) => f.file));
        return next;
      });
    },
    [onChange]
  );
  const openPicker = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);
  const filesRef = useRef(files);
  filesRef.current = files;
  useEffect(() => {
    return () => filesRef.current.forEach((f) => URL.revokeObjectURL(f.preview));
  }, []);
  return /* @__PURE__ */ jsx(
    FileUploadContext.Provider,
    {
      value: {
        files,
        isDragging,
        setIsDragging,
        inputRef,
        multiple,
        accept,
        maxSize,
        disabled,
        addFiles,
        removeFile,
        openPicker
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: clsx("awake-file-upload", className),
          style,
          "data-disabled": disabled || void 0,
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "file",
                className: "awake-file-upload-input",
                multiple,
                accept: accept.join(","),
                disabled,
                onChange: (e) => {
                  if (e.target.files) addFiles(e.target.files);
                  e.target.value = "";
                },
                "aria-hidden": "true",
                tabIndex: -1
              }
            ),
            children
          ]
        }
      )
    }
  );
}
function Dropzone({ children, className, ...props }) {
  const { isDragging, setIsDragging, addFiles, openPicker, disabled } = useFileUpload();
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-label": "Upload files",
      className: clsx("awake-file-upload-dropzone", className),
      "data-dragging": isDragging || void 0,
      "data-disabled": disabled || void 0,
      onClick: openPicker,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") openPicker();
      },
      onDragEnter: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      },
      onDragOver: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      },
      onDragLeave: (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      },
      onDrop: (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (!disabled && e.dataTransfer.files) addFiles(e.dataTransfer.files);
      },
      ...props,
      children: children ?? /* @__PURE__ */ jsx(DropzoneContent, {})
    }
  );
}
function DropzoneContent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(UploadIcon, {}),
    /* @__PURE__ */ jsxs("span", { className: "awake-file-upload-dropzone-title", children: [
      "Drag & drop or",
      " ",
      /* @__PURE__ */ jsx("span", { className: "awake-file-upload-dropzone-link", children: "click to select" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "awake-file-upload-dropzone-hint", children: "JPG, PNG or WebP" })
  ] });
}
function UploadIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "awake-file-upload-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        /* @__PURE__ */ jsx("polyline", { points: "17 8 12 3 7 8" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
      ]
    }
  );
}
function FileList({ className, ...props }) {
  const { files, removeFile } = useFileUpload();
  if (files.length === 0) return null;
  return /* @__PURE__ */ jsx("ul", { className: clsx("awake-file-upload-list", className), ...props, children: files.map((f, i) => /* @__PURE__ */ jsx(
    FileItem,
    {
      uploadFile: f,
      onRemove: () => removeFile(i)
    },
    f.preview
  )) });
}
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileItem({ uploadFile, onRemove }) {
  return /* @__PURE__ */ jsxs("li", { className: "awake-file-upload-item", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: uploadFile.preview,
        alt: uploadFile.file.name,
        className: "awake-file-upload-item-thumb"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "awake-file-upload-item-info", children: [
      /* @__PURE__ */ jsx("span", { className: "awake-file-upload-item-name", children: uploadFile.file.name }),
      /* @__PURE__ */ jsx("span", { className: "awake-file-upload-item-size", children: formatSize(uploadFile.file.size) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "awake-file-upload-item-remove",
        onClick: onRemove,
        "aria-label": `Remove ${uploadFile.file.name}`,
        children: /* @__PURE__ */ jsx(CloseIcon, {})
      }
    )
  ] });
}
function CloseIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
}
var FileUpload = { Root, Dropzone, FileList };
export {
  FileUpload
};
//# sourceMappingURL=file-upload.js.map