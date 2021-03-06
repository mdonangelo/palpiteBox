import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async(req, res) => {
    try {
        
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        });

        await doc.loadInfo();
    
        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells("A:B");
    
        const showCoupon = sheet.getCell(2, 0).value;
        const message = sheet.getCell(2, 1).value;

        res.end(JSON.stringify({
            showCoupon,
            message
        }));
    }catch(error) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ""
        }));
    }
    
}