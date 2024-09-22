import { useState } from "react";
import *as xlsx from "xlsx";

const FetchExcelData = () => {

    const [excelData, setExcelData] = useState([]);

    const readExcel = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer(file);
        const excelfile = xlsx.read(data);
        const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
        const exceljson = xlsx.utils.sheet_to_json(excelsheet);
        //console.log(exceljson);
        setExcelData(exceljson);

    }

    return (
        <div>
            <div className="content">
                <div className="row fthight">
                    <div className="col-md-4">
                        <h3 className="mt-3">Fetch Excel Data</h3>
                        <label className="form-label">File</label>
                        <input type="file" className="form-control " onChange={(e) => readExcel(e)} />

                    </div>

                    <div className="col-md-12  mt-3">
                        {excelData.length > 1 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>ID</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {excelData.map((item) => <tr>

                                        <td>{item.Name}</td>
                                        <td>{item.ID}</td>
                                        <td>{item.Salary}</td>

                                    </tr>
                                    )}
                                </tbody>
                            </table>)}

                    </div>

                </div>
            </div>
        </div>
    )


}

export default FetchExcelData;