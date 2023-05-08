import React from "react";
import "./SampleImages.css";


const SampleImages = () => {
    return (
        <div className="pa4">
        <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
            

            <tbody className="lh-copy">
                <tr>
                <th className="pv3 tl pr3 bb b--black-20">Source</th>
                <th className="pv3 tl pr3 bb b--black-20">Image URL</th>

                </tr>
                <tr>
                <td className="pv3 tl pr3 bb b--black-20">Unsplash</td>
                <td className="pv3 tl pr3 bb b--black-20">https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80</td>
                </tr>
                <tr>
                <td className="pv3 tl pr3 bb b--black-20">Unsplash</td>
                <td className="pv3 tl pr3 bb b--black-20">https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80</td>
                </tr>
                <tr>
                <td className="pv3 tl pr3 bb b--black-20">Unsplash</td>
                <td className="pv3 tl pr3 bb b--black-20">https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    );
}


export default SampleImages;