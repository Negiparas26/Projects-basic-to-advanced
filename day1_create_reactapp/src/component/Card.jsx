function Card() {
    const data=[
      {
         image:'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9ufGVufDB8fDB8fHww' ,
         name: "amazon basics"   ,
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil at tempore tenetur, harum rem " ,
        stock: 'true',
        },
      {
        image:'https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D' ,
        name: "cars"   ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil at tempore tenetur, harum rem " ,
        stock: false,
      },
     {
      image:'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D' ,
      name: "gaming"   ,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil at tempore tenetur, harum rem " ,
      stock: true,
    },
    ]
      
  
  const addevent = ()=>(alert(" hello welcome !!!!!"))
  
  
      return (
        <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
        { data.map( (e,index)=>(
          <div key={index}className="w-52 bg-zinc-100  rounded-md overflow-hidden">
            <div className="w-full h-32 bg-zinc-300"> 
              <img className="w-full h-full object-cover " src={e.image} alt="" /></div>
           <div className="px-3 py-4">
            <h2 className="font-semibold ">{e.name}</h2>
            <p className="text-xs mt-2 ">{e.description}</p>
            <div>
           <button onMouseOver={addevent} className={` px-2 py-1 ${e.stock ? 'bg-blue-400' : 'bg-red-800' } text-xs font-semibold text-zinc-300 ` }> {e.stock? 'In Stock':'out of stock'}</button>
            </div>
          </div>
        </div>
      
      ))}
        </div>
      );
    } 
    
    export default Card;
       