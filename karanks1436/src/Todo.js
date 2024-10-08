import { Cancel, Delete, Done } from "@mui/icons-material";
import { useState } from "react"
import Navbar from "./Navbar";

export default function Todo() {

    const [list, setlist] = useState([
        // { Name: "", Status: 0 }
       

    ])


    function undone(x) {
        list[x].Status = 1;
        setlist([...list])

    }

    function done(x) {
        list[x].Status = 0;
        setlist([...list])
    }

    function del(x) {
        list.splice(x,1)
        setlist([...list])
    }

    function add(x) {
        x.preventDefault()
        var data = new FormData(x.currentTarget)
        var tsk = {Name: data.get('task'), Status:0}
        setlist([...list, tsk])
        x.target.reset()
        x.target.task.focus()
    }


    return (
        <>
            <div className="row m-0  tdo">
        <Navbar/>
                <div className="col-lg-6 offset-lg-3">
                    <div className="card tdo2">
            <h1 className="text-center text-warning fw-bold display-2">TO-DO LIST</h1>
                        <div className="card-body">
                            <ul className="list-group">
                                {list.map((row, index) => (
                                    <li className="list-group-item">
                                        {row.Status == 0 ? (
                                            <>
                                                <button onClick={() => undone(index)} className="btn btn-info mx-2">
                                                    <Cancel/>
                                                </button>
                                                {row.Name}
                                            </>
                                        ) : (
                                            <>
                                            <button onClick={() => done(index)} className="btn btn-success">
                                                <Done/>
                                            </button>
                                            <del>
                                                {row.Name}
                                            </del>
                                            </>
                                        )
                                    }

<button onClick={() => del(index)} className="mx-5 justify-content-end align-items-end btn btn-danger"><Delete/></button>

                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="card-footer">
<form onSubmit={add}>
<div className="input-group">
<input type="text" name="task" className="form-control" placeholder="Add Task" required />
<button type="submit" className="btn btn-success">ADD</button>
</div>
</form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}