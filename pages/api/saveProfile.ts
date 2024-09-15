import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { parse } from 'json2csv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Ensure body contains necessary fields
      const { profilePhoto, services, description } = req.body;

      // Define CSV fields and data
      const csvFields = ['Profile Photo', 'Childcare', 'Elderly Care', 'Companionship', 'Housekeeping', 'Description'];
      const csvData = [
        {
          'Profile Photo': profilePhoto || 'N/A',
          'Childcare': services.childcare ? 'Yes' : 'No',
          'Elderly Care': services.elderlyCare ? 'Yes' : 'No',
          'Companionship': services.companionship ? 'Yes' : 'No',
          'Housekeeping': services.housekeeping ? 'Yes' : 'No',
          'Description': description,
        },
      ];

      // Convert data to CSV format
      const csv = parse(csvData, { fields: csvFields });
      const filePath = path.join(process.cwd(), 'data', 'profile-data.csv');

      // Append to CSV file
      fs.appendFile(filePath, csv + '\n', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return res.status(500).json({ message: 'Error saving data' });
        }
        return res.status(200).json({ message: 'Data saved successfully' });
      });
    } catch (error) {
      console.error('Error in API route:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
