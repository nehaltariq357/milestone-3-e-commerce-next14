import { NextResponse } from "next/server"
import {product} from "../product/product"

export const GET = ()=>{
return NextResponse.json(product)
}