import React from "react";
import './education.scss'

export const Education =()=>{
    return(
        <div className="edu">
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Institution/Board</th>
                        <th>Year</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Tech Civil Engineering </td>
                        <td>NIT, Surat</td>
                        <td> 2020</td>
                        <td> 81.60%</td>
                    </tr>
                    <tr>
                        <td>Class-XII (R.B.S.E)</td>
                        <td>Prince School, Sikar</td>
                        <td>2015</td>
                        <td> 84.60%</td>
                    </tr>
                    <tr>
                        <td>Class-X (R.B.S.E) </td>
                        <td>Tagore school, Kuchaman city</td>
                        <td>2013 </td>
                        <td>84.83%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}