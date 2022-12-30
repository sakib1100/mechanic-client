
const Order = ({prd,setData,data}) => {

 
    const {_id,name,price,img} = prd;
	


const handleDelete = id => {
  const proceed = window.confirm('Are you sure want to delete this product?');
  if(proceed){
	console.log('deleting user white id', id);
	const url  = `https://mechanic-server-three.vercel.app/GetData/${id}`;
	fetch(url,{
	   method : 'DELETE'
	})
   .then(res => res.json())
   .then(datas => {
		   if(datas.deletedCount > 0){
			console.log('deleted');
			const remaining = data.filter(ur => ur._id !== id);
			setData(remaining);
		   }
   })
   
	
  }

}

    return (
        <div>
       
<div class='flex gap-5 items-center  justify-center  from-red-100 '>
	<div class="p-4 items-center justify-center w-[400px] rounded-xl group max-sm:flex sm:flex max-sm:space-x-1 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
		<img  class="mx-auto h-24 w-full block w-4/12  rounded-lg" alt="art cover" loading="lazy" src={img} />
		<div class="flex justify-between items-center sm:w-8/12 pl-0 p-2">
			<div class="space-y-2">
				<div class="space-y-4">
					<h4 class="text-md  font-bold text-cyan-900 text-justify">{name}</h4>
					<h1 className='text-2xl'>{price}</h1>
				</div>
			</div>
			<div class="space-y-2">
				<button onClick={() => handleDelete(_id)} className="btn btn-sm text-white btn-error">Delete</button>
			</div>
		</div>
	</div>
</div>

</div>
      
    );
};

export default Order;