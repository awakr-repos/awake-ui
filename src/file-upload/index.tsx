'use client';

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  ComponentProps,
} from 'react';
import clsx from 'clsx';
import './styles.css';

// ─── Types ───────────────────────────────────────────────────────────────────

export type FileUploadFile = {
  file: File;
  preview: string;
};

type FileUploadContextValue = {
  files: FileUploadFile[];
  isDragging: boolean;
  setIsDragging: (v: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  multiple: boolean;
  accept: string[];
  maxSize?: number;
  disabled: boolean;
  addFiles: (incoming: FileList | File[]) => void;
  removeFile: (index: number) => void;
  openPicker: () => void;
};

const FileUploadContext = createContext<FileUploadContextValue | null>(null);

function useFileUpload() {
  const ctx = useContext(FileUploadContext);
  if (!ctx) throw new Error('FileUpload components must be used inside <FileUpload.Root>');
  return ctx;
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export type FileUploadRootProps = {
  multiple?: boolean;
  accept?: string[];
  maxSize?: number;
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Root({
  multiple = false,
  accept = ['image/jpeg', 'image/png', 'image/webp'],
  maxSize,
  onChange,
  disabled = false,
  children,
  className,
  style,
}: FileUploadRootProps) {
  const [files, setFiles] = useState<FileUploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = useCallback(
    (file: File) => {
      if (accept.length > 0 && !accept.includes(file.type)) return false;
      if (maxSize !== undefined && file.size > maxSize) return false;
      return true;
    },
    [accept, maxSize],
  );

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const arr = Array.from(incoming).filter(validate);
      if (arr.length === 0) return;

      setFiles(prev => {
        if (!multiple) prev.forEach(f => URL.revokeObjectURL(f.preview));
        const added = arr.map(f => ({ file: f, preview: URL.createObjectURL(f) }));
        const next = multiple ? [...prev, ...added] : added;
        onChange?.(next.map(f => f.file));
        return next;
      });
    },
    [multiple, validate, onChange],
  );

  const removeFile = useCallback(
    (index: number) => {
      setFiles(prev => {
        URL.revokeObjectURL(prev[index].preview);
        const next = prev.filter((_, i) => i !== index);
        onChange?.(next.map(f => f.file));
        return next;
      });
    },
    [onChange],
  );

  const openPicker = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  // Revoke all object URLs on unmount
  const filesRef = useRef(files);
  filesRef.current = files;
  useEffect(() => {
    return () => filesRef.current.forEach(f => URL.revokeObjectURL(f.preview));
  }, []);

  return (
    <FileUploadContext.Provider
      value={{
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
        openPicker,
      }}
    >
      <div
        className={clsx('awake-file-upload', className)}
        style={style}
        data-disabled={disabled || undefined}
      >
        <input
          ref={inputRef}
          type="file"
          className="awake-file-upload-input"
          multiple={multiple}
          accept={accept.join(',')}
          disabled={disabled}
          onChange={e => {
            if (e.target.files) addFiles(e.target.files);
            e.target.value = '';
          }}
          aria-hidden="true"
          tabIndex={-1}
        />
        {children}
      </div>
    </FileUploadContext.Provider>
  );
}

// ─── Dropzone ─────────────────────────────────────────────────────────────────

export type FileUploadDropzoneProps = {
  children?: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<'div'>, 'onClick' | 'children' | 'className'>;

function Dropzone({ children, className, ...props }: FileUploadDropzoneProps) {
  const { isDragging, setIsDragging, addFiles, openPicker, disabled } = useFileUpload();

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label="Upload files"
      className={clsx('awake-file-upload-dropzone', className)}
      data-dragging={isDragging || undefined}
      data-disabled={disabled || undefined}
      onClick={openPicker}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') openPicker();
      }}
      onDragEnter={e => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      }}
      onDragOver={e => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      }}
      onDragLeave={e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (!disabled && e.dataTransfer.files) addFiles(e.dataTransfer.files);
      }}
      {...props}
    >
      {children ?? <DropzoneContent />}
    </div>
  );
}

// ─── DropzoneContent (default) ────────────────────────────────────────────────

function DropzoneContent() {
  return (
    <>
      <UploadIcon />
      <span className="awake-file-upload-dropzone-title">
        Drag &amp; drop or{' '}
        <span className="awake-file-upload-dropzone-link">click to select</span>
      </span>
      <span className="awake-file-upload-dropzone-hint">JPG, PNG or WebP</span>
    </>
  );
}

function UploadIcon() {
  return (
    <svg
      className="awake-file-upload-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

// ─── FileList ─────────────────────────────────────────────────────────────────

export type FileUploadFileListProps = {
  className?: string;
} & Omit<ComponentProps<'ul'>, 'children'>;

function FileList({ className, ...props }: FileUploadFileListProps) {
  const { files, removeFile } = useFileUpload();

  if (files.length === 0) return null;

  return (
    <ul className={clsx('awake-file-upload-list', className)} {...props}>
      {files.map((f, i) => (
        <FileItem
          key={f.preview}
          uploadFile={f}
          onRemove={() => removeFile(i)}
        />
      ))}
    </ul>
  );
}

// ─── FileItem (internal) ──────────────────────────────────────────────────────

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type FileItemProps = {
  uploadFile: FileUploadFile;
  onRemove: () => void;
};

function FileItem({ uploadFile, onRemove }: FileItemProps) {
  return (
    <li className="awake-file-upload-item">
      <img
        src={uploadFile.preview}
        alt={uploadFile.file.name}
        className="awake-file-upload-item-thumb"
      />
      <div className="awake-file-upload-item-info">
        <span className="awake-file-upload-item-name">{uploadFile.file.name}</span>
        <span className="awake-file-upload-item-size">
          {formatSize(uploadFile.file.size)}
        </span>
      </div>
      <button
        type="button"
        className="awake-file-upload-item-remove"
        onClick={onRemove}
        aria-label={`Remove ${uploadFile.file.name}`}
      >
        <CloseIcon />
      </button>
    </li>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const FileUpload = { Root, Dropzone, FileList };
