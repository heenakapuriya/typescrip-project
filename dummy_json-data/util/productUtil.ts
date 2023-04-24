import { IProduct } from "../model/Iproduct";
import path from "path";
import jsonfile from "jsonfile";


export class productUtil {
    private static productjsonpath = path.join(__dirname, "..", "dummy_json_data", "IProduct.json");
    public static getAllProducts(): Promise<IProduct[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.productjsonpath, (err, data) => {

                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        })

    }

    public static getProducts(productId: Number): Promise<IProduct | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.productjsonpath, (err, data) => {

                if (err) {
                    reject(err);
                }
                else {
                    let productList: IProduct[] = data;
                    let product: IProduct | undefined = productList.find(items => items.id === productId)
                    resolve(product);
                }
            })
        })

    }
}