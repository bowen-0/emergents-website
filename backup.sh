#!/bin/bash

# Create backup with timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="emergents_backup_${TIMESTAMP}"

# Create backup directory if it doesn't exist
mkdir -p ../backups

# Create the backup
echo "Creating backup: ${BACKUP_NAME}"
tar -czf "../backups/${BACKUP_NAME}.tar.gz" \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='dist' \
  --exclude='.git' \
  .

echo "Backup created at: ../backups/${BACKUP_NAME}.tar.gz"
echo ""
echo "To restore later, use:"
echo "tar -xzf ../backups/${BACKUP_NAME}.tar.gz"