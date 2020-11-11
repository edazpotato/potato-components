The typography component lets you use normal html typography markup.

> NOTE: Only `h1`, `h2`, `h3` and `h4` elements are supported (sorry `h5` and `h6` fans 😥 ) because ho acctually needs six headings??

```jsx
import React from 'react';
import Typography from './Typography';

<Typography>

	<h1>Heading 1</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fuga ducimus dolorem suscipit.</p>
	<h2>Heading 2</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus perspiciatis labore quis, qui, animi hic autem est aut beatae sit!</p>
	<h3>Heading 3</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis modi a numquam commodi provident amet.</p>
	<h4>Heading 4</h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut error voluptates optio dolores vel libero. Odit hic nostrum a tempora, facere aut, quia.</p>
	<h5>Heading 5</h5>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, reiciendis.</p>
	<h6>Heading 6</h6>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, repellendus illum ad.</p>

	<h3>Ordered list</h3>
	<ol>
		<li>list item 1</li>
		<li>
			list item 1
			<ol>
				<li>list item 2</li>
				<li>
					list item 2
					<ol>
						<li>list item 3</li>
						<li>list item 3</li>
					</ol>
				</li>
				<li>list item 2</li>
				<li>list item 2</li>
			</ol>
		</li>
		<li>list item 1</li>
		<li>list item 1</li>
	</ol>

	<h3>UN-Ordered list</h3>
	<ul>
		<li>list item 1</li>
		<li>
			list item 2
			<ul>
				<li>list item 2a</li>
				<li>
					list item 2b
					<ul>
						<li>list item 2bi</li>
						<li>list item 2bii</li>
					</ul>
				</li>
				<li>list item 2c</li>
				<li>list item 2d</li>
			</ul>
		</li>
		<li>list item 3</li>
		<li>list item 4</li>
	</ul>

	<h3>TABLE!!!!!!</h3>
	<table>
		<tbody>
			<tr>
				<th>Column 1</th>
				<th>Column number two</th>
				<th>Column 3</th>
				<th>Column 4</th>
			</tr>
			<tr>
				<td>I'm item #1 in column #1</td>
				<td>I'm item #1 in column #2</td>
				<td>I'm item #1 in column #3</td>
				<td>I'm item #1 in column #4</td>
			</tr>
			<tr>
				<td>I'm item #2 in column #1</td>
				<td>I'm item #2 in column #2</td>
				<td>I'm item #2 in column #3</td>
				<td>I'm item #2 in column #4</td>
			</tr>
		</tbody>
	</table>
</Typography>
```
