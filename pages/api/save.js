import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        });

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[1];
        const formData = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells("A:B");
    
        const showCoupon = sheetConfig.getCell(2, 0).value;
        const message = sheetConfig.getCell(2, 1).value;

        let cupom = "";
        let promo = "";

        if(showCoupon) {
            cupom = uuidv4();
            promo = message;
        }

        await sheet.addRow({
            "Nome": formData.Nome,
            "Email": formData.Email,
            "Whatsapp": formData.Whatsapp,
            "Promoção": promo,
            "Nota": formData.Nota,
            "Cupom": cupom,
            "Enviado em": moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        });
        res.end(JSON.stringify({
            showCoupon,
            cupom,
            promo
        }));
    }catch(error) {
        res.end(error)
    }
    
}