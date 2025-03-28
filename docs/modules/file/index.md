# 🦔 @hedhog/file

The **File Module** provides functionality for file management, including uploading, downloading, and deleting files. It supports multiple storage providers (e.g., local, S3, Azure, GCS) and allows you to manage files with features like pagination and MIME type validation. The module also provides temporary URLs for file access and ensures that files are securely stored and accessed through a variety of providers.

### Features

- **File Upload**: Upload files to the selected storage provider.
- **File Download**: Retrieve files through temporary URLs or direct downloads.
- **File Deletion**: Delete files from the storage provider.
- **Pagination**: Retrieve a paginated list of files.
- **MIME Type Validation**: Ensure that only accepted file types are uploaded.
- **File Size Validation**: Enforce file size limits based on configuration.
- **Multiple Storage Providers**: Supports multiple file storage providers (e.g., Local, S3, Azure, GCS).
- **Temporary URLs**: Generate temporary URLs for secure file access.

### Controller Endpoints

- `GET /file`: List all files with pagination.
- `GET /file/:id`: Retrieve a file by its ID.
- `GET /file/download/:token`: Download a file using a temporary token.
- `PUT /file/download/:id`: Generate a temporary URL for file download.
- `POST /file`: Upload a new file.
- `DELETE /file`: Delete one or more files.

### Service Methods

- `getProvider()`: Get the file storage provider based on the application settings.
- `getMimeType(mimetype: string)`: Retrieve the MIME type ID or create a new one if it doesn't exist.
- `acceptMimetypes(mimetype: string)`: Check if the MIME type is accepted by the storage provider.
- `maxFileSize(size: number)`: Check if the file size exceeds the allowed limit.
- `uploadFromString(destination: string, filename: string, filecontent: string, mimetype: string)`: Upload a file from a string content.
- `upload(destination: string, fileBuffer: Express.Multer.File)`: Upload a file from a buffer (e.g., from an HTTP request).
- `delete({ ids }: DeleteDTO)`: Delete one or more files from the storage provider.
- `getFiles(paginationParams: PaginationDTO)`: Retrieve a paginated list of files.
- `get(fileId: number)`: Retrieve a file by its ID.
- `readStream(filepath: string)`: Read the file stream for a given file path.
- `download(token: string)`: Download a file using a token.
- `tempURL(filepath: string, expires: number)`: Generate a temporary URL for a file.

### Installation

To install the `@hedhog/file` module, use the following command:

```bash
npm i @hedhog/file
```

### Usage

Once installed, you can integrate the File module into your project to quickly set up and manage file-related operations.

```typescript
import { FileModule } from "@hedhog/file";

@Module({
  imports: [FileModule],
})
export class AppModule {}
```

By importing the FileModule, you gain access to all the functionality provided by the module, making it easier to manage file-related operations such as uploading, downloading, and deleting files across various storage providers.

### Folder Structure

```plaintext
├── file.controller.ts       # Defines routes for file management
├── file.service.ts          # Contains business logic for file management
├── file.module.ts           # File module setup
├── index.ts                 # Entry file
├── dto
│   ├── delete.dto.ts        # DTO for deleting files
├── provider
│   ├── abstract.provider.ts # Abstract class for storage providers
│   ├── azure.provider.ts    # Azure storage provider
│   ├── gcs.provider.ts      # Google Cloud Storage provider
│   ├── local.provider.ts    # Local storage provider
│   ├── provider.enum.ts     # Enum for storage providers
│   ├── provider.factory.ts  # Factory for creating the appropriate provider
│   └── s3.provider.ts       # S3 storage provider
```

---

This module is designed to handle file management across various storage providers, providing flexibility and scalability while ensuring secure handling of file uploads, downloads, and deletions. The integration of multiple storage services allows you to choose the most suitable provider for your use case.
