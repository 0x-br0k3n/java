# Karnaugh map (K-map)

## What is a K-map?
A Karnaugh map (K-map) is a visual method used to `simplify the algebraic expressions` in Boolean functions without having to resort to complex theorems or equation manipulations. A K-map can be thought of as a special version of a truth table that makes it easier to map out parameter values and arrive at a simplified Boolean expression.

## 2-variable K-map sample

<div style="display:flex;align-items:center;justify-content:center;">

<div>

#### SOP
<table>
    <thead>
        <tr>
            <th colspan="2" rowspan="2" style="text-align: center;">a/b</th>
            <th>0</th>
            <th>1</th>
        </tr>
        <tr>
            <th>b'</th>
            <th>b</th>
        </tr>
    </thead>
  <tbody>
    <tr>
        <th>0</th>
        <td>a'</td>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <td>a</td>
        <td><sub><sub>2</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
    </tr>
  </tbody>
</table>
</div>

<div style="padding-left:5%;">

#### POS 
<table>
    <thead>
        <tr>
            <th colspan="2" rowspan="2" style="text-align: center;">a/b</th>
            <th>0</th>
            <th>1</th>
        </tr>
        <tr>
            <th>b</th>
            <th>b'</th>
        </tr>
    </thead>
  <tbody>
    <tr>
        <th>0</th>
        <td>a</td>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <td>a'</td>
        <td><sub><sub>2</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
    </tr>
  </tbody>
</table>
</div>
</div>

## 3-variable K-map sample

<div style="display:grid;align-items:center;justify-content:center;">

<div>

#### SOP
<table>
    <thead>
        <tr>
            <th colspan="2" rowspan="2" style="text-align: center;">a/bc</th>
            <th>00</th>
            <th>01</th>
            <th>11</th>
            <th>10</th>
        </tr>
        <tr>
            <th>b'c'</th>
            <th>b'c</th>
            <th>bc</th>
            <th>bc'</th>
        </tr>
    </thead>
  <tbody>
    <tr rowspan="2">
        <th>0</th>
        <td>a'</td>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <td>a</td>
        <td><sub><sub>4</sub></sub></td>
        <td><sub><sub>5</sub></sub></td>
        <td><sub><sub>7</sub></sub></td>
        <td><sub><sub>6</sub></sub></td>
    </tr>
  </tbody>
</table>
</div>

<div>

#### POS 
<table>
    <thead>
        <tr>
            <th colspan="2" rowspan="2" style="text-align: center;">a/bc</th>
            <th>00</th>
            <th>01</th>
            <th>11</th>
            <th>10</th>
        </tr>
        <tr>
            <th>b+c</th>
            <th>b+c'</th>
            <th>b'+c'</th>
            <th>b'+c</th>
        </tr>
    </thead>
  <tbody>
    <tr rowspan="2">
        <th>0</th>
        <td>a</td>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <td>a'</td>
        <td><sub><sub>4</sub></sub></td>
        <td><sub><sub>5</sub></sub></td>
        <td><sub><sub>7</sub></sub></td>
        <td><sub><sub>6</sub></sub></td>
    </tr>
  </tbody>
</table>
</div>
</div>

## Truth table of min term and max term (2 variable)

<table>
    <thead>
        <tr>
            <td>a</td>
            <td>b</td>
            <td>SOP (Min Term)</td>
            <td>POS (Max Term)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>a'b' (m<sub><sub>0</sub></sub>)</td>
            <td>a+b (M<sub><sub>0</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>a'b (m<sub><sub>1</sub></sub>)</td>
            <td>a+b' (M<sub><sub>1</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>ab' (m<sub><sub>2</sub></sub>)</td>
            <td>a'+b (M<sub><sub>2</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>ab (m<sub><sub>3</sub></sub>)</td>
            <td>a'+b' (M<sub><sub>3</sub></sub>)</td>
        </tr>
    </tbody>
</table>

## Truth table of min term and max term (3 variable)

<table>
    <thead>
        <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>SOP (Min Term)</td>
            <td>POS (Max Term)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>a'b'c' (m<sub><sub>0</sub></sub>)</td>
            <td>a+b+c (M<sub><sub>0</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>a'b'c (m<sub><sub>1</sub></sub>)</td>
            <td>a+b+c' (M<sub><sub>1</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>a'bc' (m<sub><sub>2</sub></sub>)</td>
            <td>a+b'+c (M<sub><sub>2</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>a'bc (m<sub><sub>3</sub></sub>)</td>
            <td>a+b'+c' (M<sub><sub>3</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>ab'c' (m<sub><sub>4</sub></sub>)</td>
            <td>a'+b+c (M<sub><sub>4</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>ab'c (m<sub><sub>5</sub></sub>)</td>
            <td>a'+b+c' (M<sub><sub>5</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>abc' (m<sub><sub>6</sub></sub>)</td>
            <td>a'+b'+c (M<sub><sub>6</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>abc (m<sub><sub>7</sub></sub>)</td>
            <td>a'+b'+c' (M<sub><sub>7</sub></sub>)</td>
        </tr>
    </tbody>
</table>