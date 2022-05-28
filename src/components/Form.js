import React, {useState} from "react";


const Form = ()=>{
    const [inputs, setInputs] = useState({
        name: "",
        desc: "",
        picture1: "",
        picture2:"",
        data:"",
        user_id:"intern"
    });

    const { name, desc, picture1, picture2, data, user_id } = inputs;
    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });


    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {name, desc, picture1, picture2, data, user_id };
            const response = await fetch(
                "http://collectdata2021.herokuapp.com/pointapi/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            console.log(response)
        } catch (err) {
            console.error(err.message);
        }
    }
        return(
            <div className="container">
                <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label  className="form-label" name="name" value={name} onChange={e => onChange(e)}>Name</label>
                    <input  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label" name="desc" value={desc} onChange={e => onChange(e)}>Desc</label>
                    <input  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label" name="picture1" value={picture1} onChange={e => onChange(e)}>Picture1</label>
                    <input  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label" name="picture2" value={picture2} onChange={e => onChange(e)}>Picture2</label>
                    <input  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label" name="data" value={data} onChange={e => onChange(e)}>Point</label>
                    <input  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label" name="user_id" value={user_id} onChange={e => onChange(e)}>user_id</label>
                    <input  className="form-control"/>
                </div>
                <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
        )
    }
export default Form;