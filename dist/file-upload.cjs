"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/file-upload/index.tsx
var file_upload_exports = {};
__export(file_upload_exports, {
  FileUpload: () => FileUpload
});
module.exports = __toCommonJS(file_upload_exports);
var import_react = require("react");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FileUploadContext = (0, import_react.createContext)(null);
function useFileUpload() {
  const ctx = (0, import_react.useContext)(FileUploadContext);
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
  const [files, setFiles] = (0, import_react.useState)([]);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const inputRef = (0, import_react.useRef)(null);
  const validate = (0, import_react.useCallback)(
    (file) => {
      if (accept.length > 0 && !accept.includes(file.type)) return false;
      if (maxSize !== void 0 && file.size > maxSize) return false;
      return true;
    },
    [accept, maxSize]
  );
  const addFiles = (0, import_react.useCallback)(
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
  const removeFile = (0, import_react.useCallback)(
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
  const openPicker = (0, import_react.useCallback)(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);
  const filesRef = (0, import_react.useRef)(files);
  filesRef.current = files;
  (0, import_react.useEffect)(() => {
    return () => filesRef.current.forEach((f) => URL.revokeObjectURL(f.preview));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: (0, import_clsx.default)("awake-file-upload", className),
          style,
          "data-disabled": disabled || void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-label": "Upload files",
      className: (0, import_clsx.default)("awake-file-upload-dropzone", className),
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
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropzoneContent, {})
    }
  );
}
function DropzoneContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadIcon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "awake-file-upload-dropzone-title", children: [
      "Drag & drop or",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-file-upload-dropzone-link", children: "click to select" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-file-upload-dropzone-hint", children: "JPG, PNG or WebP" })
  ] });
}
function UploadIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "17 8 12 3 7 8" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
      ]
    }
  );
}
function FileList({ className, ...props }) {
  const { files, removeFile } = useFileUpload();
  if (files.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: (0, import_clsx.default)("awake-file-upload-list", className), ...props, children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "awake-file-upload-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: uploadFile.preview,
        alt: uploadFile.file.name,
        className: "awake-file-upload-item-thumb"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "awake-file-upload-item-info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-file-upload-item-name", children: uploadFile.file.name }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-file-upload-item-size", children: formatSize(uploadFile.file.size) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: "awake-file-upload-item-remove",
        onClick: onRemove,
        "aria-label": `Remove ${uploadFile.file.name}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
      }
    )
  ] });
}
function CloseIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
}
var FileUpload = { Root, Dropzone, FileList };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileUpload
});
//# sourceMappingURL=file-upload.cjs.map