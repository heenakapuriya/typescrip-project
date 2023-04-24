import express, { Router, Request, Response } from "express";
import { IProduct } from "../model/Iproduct";
import { productUtil } from "../util/productUtil";

const productRouter: Router = Router();

//    ==================  HOME PAGE ROUTING ======================

// productRouter.get("/", (req: Request, res: Response) => {
//     res.json({

//         msg: "from product Router",
//         url: req.baseUrl,
//         method: req.method
//     })
// })

// ==================   ALL UTIL PRODUCT DATA ROUTING ======================
productRouter.get("/", async (req: Request, res: Response) => {

    try {
        let ProductData: IProduct[] = await productUtil.getAllProducts();
        res.status(200).json(ProductData);

    }
    catch (err) {
        return res.json(500).json({
            msg: "server error"
        })
    }
   });


   productRouter.get("/:productId", async (req: Request, res: Response) => {

    try {
        let {productId}=req.params;
        console.log(req.params);
        let ProductData: IProduct |undefined= await productUtil.getProducts(Number(productId));
        if(ProductData)

        res.status(200).json(ProductData);

    }
    catch (err) {
        return res.json(500).json({
            msg: "server error"
        })
    }
});

export default productRouter;