

const UserFeed=({user})=>{
  const {firstName,lastName,skills,age,gender,about,profilUrl}=user;
  let skillsSeparatedByComma = skills.join(', ');
    return(
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={profilUrl}
      alt="Profile picture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age && gender && <p>{age + ", " +gender}</p>}
   {about&& <p>{about}</p>}
   { skills&&<p>{skillsSeparatedByComma}</p>}
    <div className="card-actions justify-center gap-7 my-2">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-success ">Intereseted</button>
    </div>
  </div>
</div>
    )
}

export default UserFeed;