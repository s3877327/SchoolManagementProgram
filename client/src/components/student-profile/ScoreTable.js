import React from "react";

function ScoreTable() {
  return (
    <table className="table table-striped text-center table-bordered">
      <thead>
        <tr className="table-primary">
          <th scope="col">Subjects</th>
          <th scope="col">Test 1</th>
          <th scope="col">Test 2</th>
          <th scope="col">Final Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">English</th>
          <td>0</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">Math</th>
          <td>10</td>
          <td>9</td>
          <td>8</td>
        </tr>
        <tr>
          <th scope="row">History</th>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr className="table-success">
          <th scope="row">Total</th>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>

  );
}

export default ScoreTable;
