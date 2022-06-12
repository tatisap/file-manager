# File manager

## List of commands:
- Navigation & working directory (nwd)
  - Go upper from current directory  
  ```bash
  up
  ```
  - Go to dedicated folder from current directory 
  ```bash
  cd path_to_directory
  ```
  - List all files and folder in current directory
  ```bash
  ls
  ```
- Basic operations with files *(NOT directories)*
  - Read file 
  ```bash
  cat path_to_file
  ```
  - Create empty file in current working directory 
  ```bash
  add new_file_name
  ```
  - Rename file 
  ```bash
  rn path_to_file new_filename
  ```
  - Copy file
  ```bash
  cp path_to_file path_to_new_directory
  ```
  - Move file: 
  ```bash
  mv path_to_file path_to_new_directory
  ```
  - Delete file: 
  ```bash
  rm path_to_file
  ```
- Operating system info
  - Get EOL (default system End-Of-Line)  
  ```bash
  os --EOL
  ```
  - Get host machine CPUs info
  ```bash
  os --cpus
  ```
  - Get home directory
  ```bash
  os --homedir
  ```
  - Get current *system user name*  
  ```bash
  os --username
  ```
  - Get CPU architecture  
  ```bash
  os --architecture
  ```
- Hash calculation  
  - Calculate hash for file 
  ```bash
  hash path_to_file
  ```
- Compress and decompress operations  
  - Compress file (using Brotli algorithm)  
  ```bash
  compress path_to_file path_to_destination_directory
  ```
  - Decompress file (using Brotli algorithm)  
  ```bash
  decompress path_to_file path_to_destination_directory
  ```


All of paths can be relative or absolute.

If a path contains spaces enclose it in double quotes.
Example:
  ```bash
  compress "/Users/user/my text.txt" "/Users/user/compressed files"
  ```
  or
  ```bash
  add "My new text.txt"
  ```

### Have fun!