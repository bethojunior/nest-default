import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { env } from 'process';

@Injectable()
export class userRepositoryHelper {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      // accessKeyId: env("accessKeyId"),
      // secretAccessKey: env("secretAccessKey"),
      // region: env('region'),
    });
  }

  async uploadFile() // file: Express.Multer.File,
  // s3Folder: string,
  : Promise<string> {
    return '';
    // const uploadParams: AWS.S3.PutObjectRequest = {
    //   Bucket: 'YOUR_BUCKET_NAME',
    //   Key: `${s3Folder}/${file.originalname}`,
    //   Body: file.buffer,
    // };

    // try {
    //   const response = await this.s3.upload(uploadParams).promise();
    //   return response.Location;
    // } catch (error) {
    //   throw new Error('Failed to upload file: ' + error.message);
    // }
  }
}
