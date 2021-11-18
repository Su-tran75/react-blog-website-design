import React from "react";
import "./singlePost.scss";

export default function SInglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Léo</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odio,
          fugit magni obcaecati recusandae, esse hic placeat, expedita saepe
          animi doloribus cumque debitis dignissimos. Natus iusto ab eius cum
          adipisci nulla animi ducimus ipsum ut? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Labore aliquam doloremque quisquam
          molestiae incidunt nulla numquam eligendi quae! Vero, quidem hic, esse
          tempora ducimus ratione non labore consectetur minima at ad, expedita
          repudiandae maiores pariatur. Esse modi cupiditate tenetur nihil quam
          quae sit? Odit id doloribus voluptates iste sit animi. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corporis in numquam nemo
          iste, eaque perferendis voluptas repellendus sapiente ab ipsum.
        </p>
      </div>
    </div>
  );
}
