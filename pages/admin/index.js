import Head from "next/head";
import Sidebar from "../../components/admindashbord/sideban";
import Header from "../../components/admindashbord/Header";
import Container from "../../components/admindashbord/Container"

export default function Admin() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <Container />
        </div>
      </div>
    </div>
  );
}
