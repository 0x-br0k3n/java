# Karnaugh map (K-map)

## What is a K-map?
A Karnaugh map (K-map) is a visual method used to `simplify the algebraic expressions` in Boolean functions without having to resort to complex theorems or equation manipulations. A K-map can be thought of as a special version of a truth table that makes it easier to map out parameter values and arrive at a simplified Boolean expression.

## What is SOP?


## What is POS?

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
        <th>a'</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <th>a</th>
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
        <th>a</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <th>a'</th>
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
        <th>a'</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <th>a</th>
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
        <th>a</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>1</th>
        <th>a'</th>
        <td><sub><sub>4</sub></sub></td>
        <td><sub><sub>5</sub></sub></td>
        <td><sub><sub>7</sub></sub></td>
        <td><sub><sub>6</sub></sub></td>
    </tr>
  </tbody>
</table>
</div>
</div>

## 4-variable K-map sample

<div style="display:grid;align-items:center;justify-content:center;">

<div>

#### SOP
<table>
    <thead>
        <tr>
            <th colspan="2" rowspan="2" style="text-align: center;">ab/cd</th>
            <th>00</th>
            <th>01</th>
            <th>11</th>
            <th>10</th>
        </tr>
        <tr>
            <th>c'd'</th>
            <th>c'd</th>
            <th>cd</th>
            <th>cd'</th>
        </tr>
    </thead>
  <tbody>
    <tr rowspan="2">
        <th>00</th>
        <th>a'b'</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>01</th>
        <th>a'b</th>
        <td><sub><sub>4</sub></sub></td>
        <td><sub><sub>5</sub></sub></td>
        <td><sub><sub>7</sub></sub></td>
        <td><sub><sub>6</sub></sub></td>
    </tr>
    <tr>
        <th>11</th>
        <th>ab</th>
        <td><sub><sub>12</sub></sub></td>
        <td><sub><sub>13</sub></sub></td>
        <td><sub><sub>15</sub></sub></td>
        <td><sub><sub>14</sub></sub></td>
    </tr>
    <tr>
        <th>10</th>
        <th>ab'</th>
        <td><sub><sub>8</sub></sub></td>
        <td><sub><sub>9</sub></sub></td>
        <td><sub><sub>11</sub></sub></td>
        <td><sub><sub>10</sub></sub></td>
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
            <th>c+d</th>
            <th>c+d'</th>
            <th>c'+d'</th>
            <th>c'+d</th>
        </tr>
    </thead>
  <tbody>
    <tr rowspan="2">
        <th>00</th>
        <th>a+b</th>
        <td><sub><sub>0</sub></sub></td>
        <td><sub><sub>1</sub></sub></td>
        <td><sub><sub>3</sub></sub></td>
        <td><sub><sub>2</sub></sub></td>
    </tr>
    <tr>
        <th>01</th>
        <th>a+b'</th>
        <td><sub><sub>4</sub></sub></td>
        <td><sub><sub>5</sub></sub></td>
        <td><sub><sub>7</sub></sub></td>
        <td><sub><sub>6</sub></sub></td>
    </tr>
    <tr>
        <th>11</th>
        <th>a'+b'</th>
        <td><sub><sub>12</sub></sub></td>
        <td><sub><sub>13</sub></sub></td>
        <td><sub><sub>15</sub></sub></td>
        <td><sub><sub>14</sub></sub></td>
    </tr>
    <tr>
        <th>10</th>
        <th>a'+b</th>
        <td><sub><sub>8</sub></sub></td>
        <td><sub><sub>9</sub></sub></td>
        <td><sub><sub>11</sub></sub></td>
        <td><sub><sub>10</sub></sub></td>
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

## Truth table of min term and max term (4 variable)

<table style="text-align:center;">
    <thead>
        <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>SOP (Min Term)</td>
            <td>POS (Max Term)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>a'b'c'd' <br> (m<sub><sub>0</sub></sub>)</td>
            <td>a+b+c+d <br> (M<sub><sub>0</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>a'b'c'd <br> (m<sub><sub>1</sub></sub>)</td>
            <td>a+b+c+d' <br> (M<sub><sub>1</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>a'b'cd' <br> (m<sub><sub>2</sub></sub>)</td>
            <td>a+b+c'+d <br> (M<sub><sub>2</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>a'b'cd <br> (m<sub><sub>3</sub></sub>)</td>
            <td>a+b+c'+d' <br> (M<sub><sub>3</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>a'bc'd' <br> (m<sub><sub>4</sub></sub>)</td>
            <td>a+b'+c+d <br> (M<sub><sub>4</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>a'bc'd <br> (m<sub><sub>5</sub></sub>)</td>
            <td>a+b'+c+d' <br> (M<sub><sub>5</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>a'bcd' <br> (m<sub><sub>6</sub></sub>)</td>
            <td>a+b'+c'+d <br> (M<sub><sub>6</sub></sub>)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>a'bcd <br> (m<sub><sub>7</sub></sub>)</td>
            <td>a+b'+c'+d' <br> (M<sub><sub>7</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>ab'c'd' <br> (m<sub><sub>8</sub></sub>)</td>
            <td>a'+b+c+d <br> (M<sub><sub>8</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>ab'c'd <br> (m<sub><sub>9</sub></sub>)</td>
            <td>a'+b+c+d' <br> (M<sub><sub>9</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>ab'cd' <br> (m<sub><sub>10</sub></sub>)</td>
            <td>a'+b+c'+d <br> (M<sub><sub>10</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>ab'cd <br> (m<sub><sub>11</sub></sub>)</td>
            <td>a'+b+c'+d' <br> (M<sub><sub>11</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>abc'd' <br> (m<sub><sub>12</sub></sub>)</td>
            <td>a'+b'+c+d <br> (M<sub><sub>12</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>abc'd <br> (m<sub><sub>13</sub></sub>)</td>
            <td>a'+b'+c+d' <br> (M<sub><sub>13</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>abcd' <br> (m<sub><sub>14</sub></sub>)</td>
            <td>a'+b'+c'+d <br> (M<sub><sub>14</sub></sub>)</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>abcd <br> (m<sub><sub>15</sub></sub>)</td>
            <td>a'+b'+c'+d' <br> (M<sub><sub>15</sub></sub>)</td>
        </tr>
    </tbody>
</table>

## Possible pairs and quads (4 variable)
<img src="/assets/svg/k-map/light/1.svg" class="light-only"></img>
<img src="/assets/svg/k-map/dark/1.svg" class="dark-only"></img>