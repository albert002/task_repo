export default function(data){
  console.log("This is the data which we geted ",data)
  const action = {
      type:"SET_USER",
      name:data.name,
      lastname:data.lastname
  }
  return action;
};
