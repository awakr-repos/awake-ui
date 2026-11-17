import * as react from 'react';
import { ComponentProps } from 'react';

type FileUploadFile = {
    file: File;
    preview: string;
};
type FileUploadRootProps = {
    multiple?: boolean;
    accept?: string[];
    maxSize?: number;
    onChange?: (files: File[]) => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare function Root({ multiple, accept, maxSize, onChange, disabled, children, className, style, }: FileUploadRootProps): react.JSX.Element;
type FileUploadDropzoneProps = {
    children?: React.ReactNode;
    className?: string;
} & Omit<ComponentProps<'div'>, 'onClick' | 'children' | 'className'>;
declare function Dropzone({ children, className, ...props }: FileUploadDropzoneProps): react.JSX.Element;
type FileUploadFileListProps = {
    className?: string;
} & Omit<ComponentProps<'ul'>, 'children'>;
declare function FileList({ className, ...props }: FileUploadFileListProps): react.JSX.Element | null;
declare const FileUpload: {
    Root: typeof Root;
    Dropzone: typeof Dropzone;
    FileList: typeof FileList;
};

export { FileUpload, type FileUploadDropzoneProps, type FileUploadFile, type FileUploadFileListProps, type FileUploadRootProps };
