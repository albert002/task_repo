export default function(data){
  console.log("This is the id which we geted ",data)
  const action = {
      type:"DEL_USER",
      id:data
  }
  return action;
};
