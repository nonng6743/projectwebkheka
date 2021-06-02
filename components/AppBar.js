import React from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6" >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">Kheha K.6</Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/Home/contactadmin">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-5">
              ติดต่อเรา
            </a>
          </Link>
          <Link href="/seller/signin">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-5">
              Seller Centre
            </a>
          </Link>
          <Link href="/seller/signup">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-5">
              ขายสินค้ากับเรา
            </a>
          </Link>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item>
              <Link href="/Signup">
                <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500  mt-4 lg:mt-0">
                  สมัครเป็นสมาชิก
                </a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Signin">
                <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500  lg:mt-0">
                  เข้าสู่ระบบ
                </a>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
