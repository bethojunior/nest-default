import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { env } from 'process';

@Injectable()
export class FileUploads3 {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      // accessKeyId: env("accessKeyId"),
      // secretAccessKey: env("secretAccessKey"),
      // region: env("region"),
    });
  }

  async uploadFile() { // (file: Express.Multer.File): Promise<string>
    const uploadParams: AWS.S3.PutObjectRequest = {
      Bucket: '', //env("bucket"),
      Key: '', //`uploads/${file.originalname}`,
      Body: '', //file.buffer,
    };

    try {
      const response = await this.s3.upload(uploadParams).promise();
      return response.Location;
    } catch (error) {
      throw new Error('Failed to upload file: ' + error.message);
    }
  }
}
