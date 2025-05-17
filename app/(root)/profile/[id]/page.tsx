import Header from "@/Components/Header";


const page =async ({params}:ParamsWithSearch) => {
    const {id} = await params;

  return (
    <div className="wrapper page">
        <Header subHeader="asifahmedsahil.007@gmail.com" title="Asif Ahmed" userImg="/assets/images/dummy.jpg"/>
        
    </div>
  )
}

export default page