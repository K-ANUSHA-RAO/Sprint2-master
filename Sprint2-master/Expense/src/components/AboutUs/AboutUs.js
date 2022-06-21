import React from 'react';
import { withRouter } from 'react-router-dom';
function AboutUs(props) {
    return(
        <div class="mt-5">
            <h4>We are a team of 9 members from JRN-9 B-21</h4>
            <div class="mt-5">
              <table class="table table-hover">
              <thead>
                    <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Superset Id</th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                            <td scope="row">S Saathvik</td>
                            <td>1230490</td>
                        </tr>
                        <tr>
                            <td scope="row">Rithvika Sanil M</td>
                            <td>1230510</td>
                        </tr>
                        <tr>
                            <td scope="row">Rachitha</td>
                            <td>1250904</td>
                        </tr>
                        <tr>
                            <td scope="row">Chaya</td>
                            <td>1290713</td>
                        </tr>
                        <tr>
                            <td scope="row">Achal N</td>
                            <td>1241172</td>
                        </tr>
                        <tr>
                            <td scope="row">Aishwarya Kodigi</td>
                            <td>1273015</td>
                        </tr>
                        <tr>
                            <td scope="row">Nikhileshwar</td>
                            <td>1234817</td>
                        </tr>
                        <tr>
                            <td scope="row">Nandini S</td>
                            <td>1297848</td>
                        </tr>
                        <tr>
                            <td scope="row">K Anusha Rao</td>
                            <td>1231040</td>
                        </tr>
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default withRouter(AboutUs);