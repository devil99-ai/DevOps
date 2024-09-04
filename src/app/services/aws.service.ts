import { Injectable } from '@angular/core';
import { S3, config, Credentials } from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  BUCKET_NAME: string = 'estore-bucket';

  constructor() { 
    // AWS Credentials
    config.update({
      region: 'ap-south-1',
      credentials: new Credentials('AKIA5RLDPKD6A374FG3E', '6H5FmLBxpI43GCRQe1ujwpCgB/5MC+oScn9H3Ogr')
    })
  }

  getS3Ref() {
    return new S3({
      apiVersion: '2006-03-01',
      params: {
        Bucket: this.BUCKET_NAME
      }
    })
  }
}
