import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';




interface DemoPageProps {
    cssStylesheet: string; // CSS passed from the parent component
    updateCss: (newCss: string) => void; // Function passed from the parent to update CSS
}

var htmlStringPre = `
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Simple.css Test Page</title>
	<!-- The following are some stylesheets for testing -->
	<!-- Sanitize.css reset -->
	<!-- <link href="https://unpkg.com/sanitize.css" rel="stylesheet" /> -->
	<!-- Latest release version of Simple.css -->
	<!-- <link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.css"> -->
	<!-- Latest commit from GitHub -->
	<!-- <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css"> -->
	<!-- Local version -->
  <style> all: unset; </style>
`
var htmlStringPost = `
</head>

<body id="top">
	<header>
		<h1>Simple.css Test Page</h1>
		<p>This is a test page filled with common HTML elements.</p>
		<nav>
			<ul>
				<li><a class="current" href="#text">Text</a></li>
				<li><a href="#embedded">Embedded content</a></li>
				<li><a href="#forms">Form elements</a></li>
				<li><a href="https://simplecss.org/">Project homepage</a></li>
				<li><a href="https://github.com/kevquirk/simple.css">GitHub repo</a></li>
			</ul>
		</nav>
	</header>
	<nav>
		<ul>
			<li>
				<a href="#text">Text</a>
				<ul>
					<li><a href="#text__headings">Headings</a></li>
					<li><a href="#text__paragraphs">Paragraphs</a></li>
					<li><a href="#text__lists">Lists</a></li>
					<li><a href="#text__blockquotes">Blockquotes</a></li>
					<li><a href="#text__asides">Asides</a></li>
					<li><a href="#text__details">Details / Summary</a></li>
					<li><a href="#text__address">Address</a></li>
					<li><a href="#text__hr">Horizontal rules</a></li>
					<li><a href="#text__tables">Tabular data</a></li>
					<li><a href="#text__code">Code</a></li>
					<li><a href="#text__sections">Sections</a></li>
					<li><a href="#text__inline">Inline elements</a></li>
					<li><a href="#text__comments">HTML Comments</a></li>
				</ul>
			</li>
			<li>
				<a href="#embedded">Embedded content</a>
				<ul>
					<li><a href="#embedded__images">Images</a></li>
					<li><a href="#embedded__bgimages">Background images</a></li>
					<li><a href="#embedded__audio">Audio</a></li>
					<li><a href="#embedded__video">Video</a></li>
					<li><a href="#embedded__canvas">Canvas</a></li>
					<li><a href="#embedded__meter">Meter</a></li>
					<li><a href="#embedded__progress">Progress</a></li>
					<li><a href="#embedded__svg">Inline SVG</a></li>
					<li><a href="#embedded__iframe">IFrames</a></li>
					<li><a href="#embedded__embed">Embed</a></li>
					<li><a href="#embedded__object">Object</a></li>
					<li><a href="#embedded__dialog">Dialog</a></li>
				</ul>
			</li>
			<li>
				<a href="#forms">Form elements</a>
				<ul>
					<li><a href="#forms__input">Input fields</a></li>
					<li><a href="#forms__select">Select menus</a></li>
					<li><a href="#forms__checkbox">Checkboxes</a></li>
					<li><a href="#forms__radio">Radio buttons</a></li>
					<li><a href="#forms__textareas">Textareas</a></li>
					<li><a href="#forms__html5">HTML5 inputs</a></li>
					<li><a href="#forms__action">Action buttons</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<main>
		<section id="text">
			<header>
				<h1>Text</h1>
			</header>
			<article id="text__headings">
				<header>
					<h2>Headings</h2>
				</header>
				
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__paragraphs">
				<header>
					<h2>Paragraphs</h2>
				</header>
				
					<p>A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a
						self-contained unit of a discourse in writing dealing with a particular point or idea. A
						paragraph consists of one or more sentences. Though not required by the syntax of any
						language, paragraphs are usually an expected part of formal writing, used to organize longer
						prose.</p>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__blockquotes">
				<header>
					<h2>Blockquotes</h2>
				</header>
				
					<blockquote>
						<p>A block quotation (also known as a long quotation or extract) is a quotation in a written
							document, that is set off from the main text as a paragraph, or block of text.</p>
						<p>It is typically distinguished visually using indentation and a different typeface or
							smaller size quotation. It may or may not include a citation, usually placed at the
							bottom.</p>
						<cite><a href="#!">Said no one, ever.</a></cite>
					</blockquote>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__asides">
				<header>
					<h2>Asides</h2>
				</header>
				<aside>
					<h4>This is an aside</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque numquam natus harum delectus autem, ipsam veritatis eligendi.</p>
				</aside>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum eligendi optio ipsa nemo assumenda mollitia inventore neque dolores animi ratione libero qui dolorem, distinctio aut, quae, iste, cumque nihil enim!</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis corrupti eaque tempore autem doloremque, placeat, in earum ab maxime commodi tenetur quos provident fugit assumenda, consequatur vero ipsum, et.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias, facilis. Dolores rerum omnis, adipisci odit ipsa, autem animi molestiae fugit temporibus fuga dignissimos, commodi et, itaque quo voluptatem recusandae voluptatibus.</p>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__lists">
				<header>
					<h2>Lists</h2>
				</header>
				
					<h3>Description list</h3>
					<dl>
						<dt>Description term</dt>
						<dd>Description details.</dd>
						<dd>Additional details.</dd>
						<dt>Description term</dt>
						<dt>This is a second term</dt>
						<dt>This is a third term</dt>
						<dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi iure! Incidunt, dolorum sit? Dolorum cumque omnis accusantium doloremque nihil est perferendis voluptas delectus, quis aperiam blanditiis deleniti modi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis, vero accusantium sed dicta exercitationem iure praesentium nobis esse ullam sunt cum blanditiis! Neque similique corporis animi voluptatibus et modi.</dd>
					</dl>
					<h3>Ordered List</h3>
					<ol type="1">
						<li>List Item 1</li>
						<li>
							List Item 2
							<ol type="A">
								<li>List Item 1</li>
								<li>
									List Item 2
									<ol type="a">
										<li>List Item 1</li>
										<li>
											List Item 2
											<ol type="I">
												<li>List Item 1</li>
												<li>
													List Item 2
													<ol type="i">
														<li>List Item 1</li>
														<li>List Item 2</li>
														<li>List Item 3</li>
													</ol>
												</li>
												<li>List Item 3</li>
											</ol>
										</li>
										<li>List Item 3</li>
									</ol>
								</li>
								<li>List Item 3</li>
							</ol>
						</li>
						<li>List Item 3</li>
					</ol>
					<h3>Unordered List</h3>
					<ul>
						<li>List Item 1</li>
						<li>
							List Item 2
							<ul>
								<li>List Item 1</li>
								<li>
									List Item 2
									<ul>
										<li>List Item 1</li>
										<li>
											List Item 2
											<ul>
												<li>List Item 1</li>
												<li>
													List Item 2
													<ul>
														<li>List Item 1</li>
														<li>List Item 2</li>
														<li>List Item 3</li>
													</ul>
												</li>
												<li>List Item 3</li>
											</ul>
										</li>
										<li>List Item 3</li>
									</ul>
								</li>
								<li>List Item 3</li>
							</ul>
						</li>
						<li>List Item 3</li>
					</ul>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__details">
				<header>
					<h1>Details / Summary</h1>
				</header>
				<details>
					<summary>Expand for details</summary>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, odio! Odio natus ullam ad
						quaerat, eaque necessitatibus, aliquid distinctio similique voluptatibus dicta consequuntur
						animi. Quaerat facilis quidem unde eos! Ipsa.</p>
				</details>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__address">
				<header>
					<h1>Address</h1>
				</header>
				<address>
					Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
					Visit us at:<br>
					Example.com<br>
					Box 564, Disneyland<br>
					USA
				</address>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__hr">
				<header>
					<h2>Horizontal rules</h2>
				</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<hr>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__tables">
				<header>
					<h2>Tabular data</h2>
				</header>
				<table>
					<caption>Table Caption</caption>
					<thead>
						<tr>
							<th>Table Heading 1</th>
							<th>Table Heading 2</th>
							<th>Table Heading 3</th>
							<th>Table Heading 4</th>
							<th>Table Heading 5</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>Table Footer 1</th>
							<th>Table Footer 2</th>
							<th>Table Footer 3</th>
							<th>Table Footer 4</th>
							<th>Table Footer 5</th>
						</tr>
					</tfoot>
					<tbody>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
					</tbody>
				</table>
				<table>
					<caption>Overflowing table</caption>
					<colgroup>
						<col>
						<col>
						<col>
						<col>
						<col>
					</colgroup>
					<thead>
						<tr>
							<th>Header_1</th>
							<th>Header_2</th>
							<th>Header_3</th>
							<th>Header_4</th>
							<th>Header_5</th>
							<th>Header_6</th>
							<th>Header_7</th>
							<th>Header_8</th>
							<th>Header_9</th>
							<th>Header_10</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Row:1 Cell:1</td>
							<td>Row:1 Cell:2</td>
							<td>Row:1 Cell:3</td>
							<td>Row:1 Cell:4</td>
							<td>Row:1 Cell:5</td>
							<td>Row:1 Cell:6</td>
							<td>Row:1 Cell:7</td>
							<td>Row:1 Cell:8</td>
							<td>Row:1 Cell:9</td>
							<td>Row:1 Cell:10</td>
						</tr>
						<tr>
							<td>Row:2 Cell:1</td>
							<td>Row:2 Cell:2</td>
							<td>Row:2 Cell:3</td>
							<td>Row:2 Cell:4</td>
							<td>Row:2 Cell:5</td>
							<td>Row:2 Cell:6</td>
							<td>Row:2 Cell:7</td>
							<td>Row:2 Cell:8</td>
							<td>Row:2 Cell:9</td>
							<td>Row:2 Cell:10</td>
						</tr>
						<tr>
							<td>Row:3 Cell:1</td>
							<td>Row:3 Cell:2</td>
							<td>Row:3 Cell:3</td>
							<td>Row:3 Cell:4</td>
							<td>Row:3 Cell:5</td>
							<td>Row:3 Cell:6</td>
							<td>Row:3 Cell:7</td>
							<td>Row:3 Cell:8</td>
							<td>Row:3 Cell:9</td>
							<td>Row:3 Cell:10</td>
						</tr>
						<tr>
							<td>Row:4 Cell:1</td>
							<td>Row:4 Cell:2</td>
							<td>Row:4 Cell:3</td>
							<td>Row:4 Cell:4</td>
							<td>Row:4 Cell:5</td>
							<td>Row:4 Cell:6</td>
							<td>Row:4 Cell:7</td>
							<td>Row:4 Cell:8</td>
							<td>Row:4 Cell:9</td>
							<td>Row:4 Cell:10</td>
						</tr>
						<tr>
							<td>Row:5 Cell:1</td>
							<td>Row:5 Cell:2</td>
							<td>Row:5 Cell:3</td>
							<td>Row:5 Cell:4</td>
							<td>Row:5 Cell:5</td>
							<td>Row:5 Cell:6</td>
							<td>Row:5 Cell:7</td>
							<td>Row:5 Cell:8</td>
							<td>Row:5 Cell:9</td>
							<td>Row:5 Cell:10</td>
						</tr>
						<tr>
							<td>Row:6 Cell:1</td>
							<td>Row:6 Cell:2</td>
							<td>Row:6 Cell:3</td>
							<td>Row:6 Cell:4</td>
							<td>Row:6 Cell:5</td>
							<td>Row:6 Cell:6</td>
							<td>Row:6 Cell:7</td>
							<td>Row:6 Cell:8</td>
							<td>Row:6 Cell:9</td>
							<td>Row:6 Cell:10</td>
						</tr>
					</tbody>
				</table>
				<figure>
					<table>
						<caption>Overflowing table in figure</caption>
						<colgroup>
							<col>
							<col>
							<col>
							<col>
							<col>
						</colgroup>
						<thead>
							<tr>
								<th>Header_1</th>
								<th>Header_2</th>
								<th>Header_3</th>
								<th>Header_4</th>
								<th>Header_5</th>
								<th>Header_6</th>
								<th>Header_7</th>
								<th>Header_8</th>
								<th>Header_9</th>
								<th>Header_10</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Row:1 Cell:1</td>
								<td>Row:1 Cell:2</td>
								<td>Row:1 Cell:3</td>
								<td>Row:1 Cell:4</td>
								<td>Row:1 Cell:5</td>
								<td>Row:1 Cell:6</td>
								<td>Row:1 Cell:7</td>
								<td>Row:1 Cell:8</td>
								<td>Row:1 Cell:9</td>
								<td>Row:1 Cell:10</td>
							</tr>
							<tr>
								<td>Row:2 Cell:1</td>
								<td>Row:2 Cell:2</td>
								<td>Row:2 Cell:3</td>
								<td>Row:2 Cell:4</td>
								<td>Row:2 Cell:5</td>
								<td>Row:2 Cell:6</td>
								<td>Row:2 Cell:7</td>
								<td>Row:2 Cell:8</td>
								<td>Row:2 Cell:9</td>
								<td>Row:2 Cell:10</td>
							</tr>
							<tr>
								<td>Row:3 Cell:1</td>
								<td>Row:3 Cell:2</td>
								<td>Row:3 Cell:3</td>
								<td>Row:3 Cell:4</td>
								<td>Row:3 Cell:5</td>
								<td>Row:3 Cell:6</td>
								<td>Row:3 Cell:7</td>
								<td>Row:3 Cell:8</td>
								<td>Row:3 Cell:9</td>
								<td>Row:3 Cell:10</td>
							</tr>
							<tr>
								<td>Row:4 Cell:1</td>
								<td>Row:4 Cell:2</td>
								<td>Row:4 Cell:3</td>
								<td>Row:4 Cell:4</td>
								<td>Row:4 Cell:5</td>
								<td>Row:4 Cell:6</td>
								<td>Row:4 Cell:7</td>
								<td>Row:4 Cell:8</td>
								<td>Row:4 Cell:9</td>
								<td>Row:4 Cell:10</td>
							</tr>
							<tr>
								<td>Row:5 Cell:1</td>
								<td>Row:5 Cell:2</td>
								<td>Row:5 Cell:3</td>
								<td>Row:5 Cell:4</td>
								<td>Row:5 Cell:5</td>
								<td>Row:5 Cell:6</td>
								<td>Row:5 Cell:7</td>
								<td>Row:5 Cell:8</td>
								<td>Row:5 Cell:9</td>
								<td>Row:5 Cell:10</td>
							</tr>
							<tr>
								<td>Row:6 Cell:1</td>
								<td>Row:6 Cell:2</td>
								<td>Row:6 Cell:3</td>
								<td>Row:6 Cell:4</td>
								<td>Row:6 Cell:5</td>
								<td>Row:6 Cell:6</td>
								<td>Row:6 Cell:7</td>
								<td>Row:6 Cell:8</td>
								<td>Row:6 Cell:9</td>
								<td>Row:6 Cell:10</td>
							</tr>
						</tbody>
					</table>
					<figcaption>Table in figure</figcaption>
				</figure>
				<details>
					<summary>Overflowing table in details</summary>
					<table>
					<caption>Overflowing table</caption>
					<colgroup>
						<col>
						<col>
						<col>
						<col>
						<col>
					</colgroup>
					<thead>
						<tr>
							<th>Header_1</th>
							<th>Header_2</th>
							<th>Header_3</th>
							<th>Header_4</th>
							<th>Header_5</th>
							<th>Header_6</th>
							<th>Header_7</th>
							<th>Header_8</th>
							<th>Header_9</th>
							<th>Header_10</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Row:1 Cell:1</td>
							<td>Row:1 Cell:2</td>
							<td>Row:1 Cell:3</td>
							<td>Row:1 Cell:4</td>
							<td>Row:1 Cell:5</td>
							<td>Row:1 Cell:6</td>
							<td>Row:1 Cell:7</td>
							<td>Row:1 Cell:8</td>
							<td>Row:1 Cell:9</td>
							<td>Row:1 Cell:10</td>
						</tr>
						<tr>
							<td>Row:2 Cell:1</td>
							<td>Row:2 Cell:2</td>
							<td>Row:2 Cell:3</td>
							<td>Row:2 Cell:4</td>
							<td>Row:2 Cell:5</td>
							<td>Row:2 Cell:6</td>
							<td>Row:2 Cell:7</td>
							<td>Row:2 Cell:8</td>
							<td>Row:2 Cell:9</td>
							<td>Row:2 Cell:10</td>
						</tr>
						<tr>
							<td>Row:3 Cell:1</td>
							<td>Row:3 Cell:2</td>
							<td>Row:3 Cell:3</td>
							<td>Row:3 Cell:4</td>
							<td>Row:3 Cell:5</td>
							<td>Row:3 Cell:6</td>
							<td>Row:3 Cell:7</td>
							<td>Row:3 Cell:8</td>
							<td>Row:3 Cell:9</td>
							<td>Row:3 Cell:10</td>
						</tr>
						<tr>
							<td>Row:4 Cell:1</td>
							<td>Row:4 Cell:2</td>
							<td>Row:4 Cell:3</td>
							<td>Row:4 Cell:4</td>
							<td>Row:4 Cell:5</td>
							<td>Row:4 Cell:6</td>
							<td>Row:4 Cell:7</td>
							<td>Row:4 Cell:8</td>
							<td>Row:4 Cell:9</td>
							<td>Row:4 Cell:10</td>
						</tr>
						<tr>
							<td>Row:5 Cell:1</td>
							<td>Row:5 Cell:2</td>
							<td>Row:5 Cell:3</td>
							<td>Row:5 Cell:4</td>
							<td>Row:5 Cell:5</td>
							<td>Row:5 Cell:6</td>
							<td>Row:5 Cell:7</td>
							<td>Row:5 Cell:8</td>
							<td>Row:5 Cell:9</td>
							<td>Row:5 Cell:10</td>
						</tr>
						<tr>
							<td>Row:6 Cell:1</td>
							<td>Row:6 Cell:2</td>
							<td>Row:6 Cell:3</td>
							<td>Row:6 Cell:4</td>
							<td>Row:6 Cell:5</td>
							<td>Row:6 Cell:6</td>
							<td>Row:6 Cell:7</td>
							<td>Row:6 Cell:8</td>
							<td>Row:6 Cell:9</td>
							<td>Row:6 Cell:10</td>
						</tr>
					</tbody>
				</table>
				</details>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__code">
				<header>
					<h2>Code</h2>
				</header>
				
					<p><strong>Keyboard input:</strong> <kbd>Cmd</kbd></p>
					<p><strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code></p>
					<p><strong>Sample output:</strong> <samp>This is sample output from a computer program.</samp>
					</p>
					<h2>Pre-formatted text</h2>
					<pre>P R E F O R M A T T E D T E X T
	! " # $ % &amp; ' ( ) * + , - . /
	0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
	@ A B C D E F G H I J K L M N O
	P Q R S T U V W X Y Z [ \ ] ^ _
	\` a b c d e f g h i j k l m n o
	p q r s t u v w x y z { | } ~ </pre>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__sections">
				<header>
					<h2>Text Sections</h2>
				</header>
				<section>
					<h3>Header 1</h3>
					<p>Test section 1</p>
				</section>
				<section>
					<h3>Header 2</h3>
					<p>Test section 2</p>
				</section>
				<section>
					<h3>Header 3</h3>
					<p>Test section 3</p>
				</section>
			</article>
			<article id="text__inline">
				<header>
					<h2>Inline elements</h2>
				</header>
				
					<p><a href="#!">This is a text link</a>.</p>
					<p><strong>Strong is used to indicate strong importance.</strong></p>
					<p><em>This text has added emphasis.</em></p>
					<p>The <b>b element</b> is stylistically different text from normal text, without any special
						importance.</p>
					<p>The <i>i element</i> is text that is offset from the normal text.</p>
					<p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual
						annotation.</p>
					<p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
					<p><s>This text has a strikethrough</s>.</p>
					<p>Superscript<sup>®</sup>.</p>
					<p>Subscript for things like H<sub>2</sub>O.</p>
					<p><small>This small text is small for fine print, etc.</small></p>
					<p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
					<p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline
							quotation.</q></p>
					<p><cite>This is a citation.</cite></p>
					<p>The <dfn>dfn element</dfn> indicates a definition.</p>
					<p>The <mark>mark element</mark> indicates a highlight.</p>
					<p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
					<p>The time element: <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="text__comments">
				<header>
					<h2>HTML Comments</h2>
				</header>
				
					<p>There is comment here:
						<!--This comment should not be displayed-->
					</p>
					<p>There is a comment spanning multiple tags and lines below here.</p>
					<!--<p><a href="#!">This is a text link. But it should not be displayed in a comment</a>.</p>
	            <p><strong>Strong is used to indicate strong importance. But, it should not be displayed in a comment</strong></p>
	            <p><em>This text has added emphasis. But, it should not be displayed in a comment</em></p>-->
				
				            <footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
		</section>
		<section id="embedded">
			<header>
				<h2>Embedded content</h2>
			</header>
			<article id="embedded__images">
				<header>
					<h2>Images</h2>
				</header>
				
					<h3>Plain <code>&lt;img&gt;</code> element</h3>
					<p><img src="https://placehold.co/480x480/EEE/31343C" alt="Placeholder image"></p>
					<h3><code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code> element</h3>
					<figure><img src="https://placehold.co/420x420/EEE/31343C" alt="Placeholder image"></figure>
					<h3><code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code> and
						<code>&lt;figcaption&gt;</code> elements
					</h3>
					<figure>
						<img src="https://placehold.co/420x420/EEE/31343C" alt="Placeholder image">
						<figcaption>Here is a caption for this image.</figcaption>
					</figure>
					<h3><code>&lt;figure&gt;</code> element with a <code>&lt;picture&gt;</code> element</h3>
					<figure>
						<picture>
							<source srcset="https://placehold.co/2000x2000/EEE/31343C" media="(min-width: 800px)">
							<img src="https://placehold.co/420x420/EEE/31343C" alt="Placeholder image" />
						</picture>
						<figcaption>Here is a caption for this image.</figcaption>
					</figure>
				
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__bgimages">
				<header>
					<h2>Background images</h2>
				</header>
				<figure style="background-image:url('https://placehold.co/300x300/EEE/31343C'); width:300px; height: 300px;">
				</figure>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__audio">
				<header>
					<h2>Audio</h2>
				</header>
				<audio controls="">audio</audio>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__video">
				<header>
					<h2>Video</h2>
				</header>
				<video controls="">video</video>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__canvas">
				<header>
					<h2>Canvas</h2>
				</header>
				<canvas>canvas</canvas>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__meter">
				<header>
					<h2>Meter</h2>
				</header>
				<meter value="2" min="0" max="10">2 out of 10</meter>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__progress">
				<header>
					<h2>Progress</h2>
				</header>
				<label for="progress-bar">No attributes (indeterminate)</label>
				<progress id="progress-bar">progress</progress>
				<label for="progress-30">30%, max 100%</label>		
				<progress id="progress-30" max="100" value="30">30%</progress>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__svg">
				<header>
					<h2>Inline SVG</h2>
				</header>
				<svg width="100px" height="100px">
						<circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
					</svg>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__iframe">
				<header>
					<h2>IFrame</h2>
				</header>
				<iframe src="index.html" height="300"></iframe>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__embed">
				<header>
					<h2>Embed</h2>
				</header>
				<embed src="index.html" height="300">
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__object">
				<header>
					<h2>Object</h2>
				</header>
				<object data="index.html" height="300"></object>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
			<article id="embedded__dialog">
				<header>
					<h2>Dialog</h2>
				</header>
				<button onclick="document.getElementById('dialog-demo').showModal()">Open</button>
				<dialog id="dialog-demo">
				<h2>Dialog</h2>
				<p>Dialogs are a new HTML5 element that can be used to create modal dialogs or pop-up windows.</p>
				<form method="dialog">
					<button>Close</button>
				</form>
				</dialog>
				<footer>
					<p><a href="#top">[Top]</a></p>
				</footer>
			</article>
		</section>
		<section id="forms">
			<header>
				<h2>Form elements</h2>
			</header>
			<form>
				<fieldset id="forms__input">
					<legend>Input fields</legend>
					<p>
						<label for="input__text">Text Input</label>
						<input id="input__text" type="text" placeholder="Text Input">
					</p>
					<p>
						<label for="input__password">Password</label>
						<input id="input__password" type="password" placeholder="Type your Password">
					</p>
					<p>
						<label for="input__webaddress">Web Address</label>
						<input id="input__webaddress" type="url" placeholder="https://yoursite.com">
					</p>
					<p>
						<label for="input__emailaddress">Email Address</label>
						<input id="input__emailaddress" type="email" placeholder="name@email.com">
					</p>
					<p>
						<label for="input__phone">Phone Number</label>
						<input id="input__phone" type="tel" placeholder="(999) 999-9999">
					</p>
					<p>
						<label for="input__search">Search</label>
						<input id="input__search" type="search" placeholder="Enter Search Term">
					</p>
					<p>
						<label for="input__text2">Number Input</label>
						<input id="input__text2" type="number" placeholder="Enter a Number">
					</p>
					<p>
						<label for="input__file">File Input</label>
						<input id="input__file" type="file">
					</p>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__select">
					<legend>Select menus</legend>
					<p>
						<label for="select">Select</label>
						<select id="select">
							<optgroup label="Option Group">
								<option>Option One</option>
								<option>Option Two</option>
								<option>Option Three</option>
							</optgroup>
						</select>
					</p>
					<p>
						<label for="select_multiple">Select (multiple)</label>
						<select id="select_multiple" multiple="multiple">
							<optgroup label="Option Group">
								<option>Option One</option>
								<option>Option Two</option>
								<option>Option Three</option>
							</optgroup>
						</select>
					</p>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__checkbox">
					<legend>Checkboxes</legend>
					<p>Nested <code>label > input</code></p>
					<ul>
						<li><label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox"
									checked="checked"> Choice A</label></li>
						<li><label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice
								B</label></li>
						<li><label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice
								C</label></li>
					</ul>
					<p>Sibling <code>input + label</code></p>
					<ul>
						<li>
							<input id="checkbox4" name="checkbox" type="checkbox" checked="checked">
							<label for="checkbox4">Choice A</label>
						</li>
						<li>
							<input id="checkbox5" name="checkbox" type="checkbox">
							<label for="checkbox5">Choice B</label>
						</li>
						<li>
							<input id="checkbox6" name="checkbox" type="checkbox">
							<label for="checkbox6">Choice C</label>
						</li>
					</ul>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__radio">
					<legend>Radio buttons</legend>
					<p>Nested <code>label > input</code></p>
					<ul>
						<li><label for="radio1"><input id="radio1" name="radio" type="radio" checked="checked">
								Option 1</label></li>
						<li><label for="radio2"><input id="radio2" name="radio" type="radio"> Option 2</label></li>
						<li><label for="radio3"><input id="radio3" name="radio" type="radio"> Option 3</label></li>
					</ul>
					<p>Sibling <code>input + label</code></p>
					<ul>
						<li>
							<input id="radio4" name="radio" type="radio" checked="checked">
							<label for="radio4">Option 1</label>
						</li>
						<li>
							<input id="radio5" name="radio" type="radio">
							<label for="radio5">Option 2</label>
						</li>
						<li>
							<input id="radio6" name="radio" type="radio">
							<label for="radio6">Option 3</label>
						</li>
					</ul>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__textareas">
					<legend>Textareas</legend>
					<p>
						<label for="textarea">Textarea</label>
						<textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
					</p>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__html5">
					<legend>HTML5 inputs</legend>
					<p>
						<label for="ic">Color input</label>
						<input type="color" id="ic" value="#000000">
					</p>
					<p>
						<label for="in">Number input</label>
						<input type="number" id="in" min="0" max="10" value="5">
					</p>
					<p>
						<label for="ir">Range input</label>
						<input type="range" id="ir" value="10">
					</p>
					<p>
						<label for="idd">Date input</label>
						<input type="date" id="idd" value="1970-01-01">
					</p>
					<p>
						<label for="idm">Month input</label>
						<input type="month" id="idm" value="1970-01">
					</p>
					<p>
						<label for="idw">Week input</label>
						<input type="week" id="idw" value="1970-W01">
					</p>
					<p>
						<label for="idt">Datetime input</label>
						<input type="datetime" id="idt" value="1970-01-01T00:00:00Z">
					</p>
					<p>
						<label for="idtl">Datetime-local input</label>
						<input type="datetime-local" id="idtl" value="1970-01-01T00:00">
					</p>
					<p>
						<label for="idl">Datalist</label>
						<input type="text" id="idl" list="example-list">
						<datalist id="example-list">
							<option value="Example #1" />
							<option value="Example #2" />
							<option value="Example #3" />
						</datalist>
					</p>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
				<fieldset id="forms__action">
					<legend>Action buttons</legend>
					<p>
						<input type="submit" value="<input type=submit>">
						<input type="button" value="<input type=button>">
						<input type="reset" value="<input type=reset>">
						<input type="submit" value="<input disabled>" disabled>
					</p>
					<p>
						<button type="submit">&lt;button type=submit&gt;</button>
						<button type="button">&lt;button type=button&gt;</button>
						<button type="reset">&lt;button type=reset&gt;</button>
						<button type="button" disabled>&lt;button disabled&gt;</button>
					</p>
					<p>
						<a href="#forms__action" class="button">&lt;a class=button&gt;</a>
						<a href="#forms__action" class="button" aria-disabled="true">&lt;a class=button aria-disabled=true&gt;</a>
					</p>
				</fieldset>
				<p><a href="#top">[Top]</a></p>
			</form>
		</section>
	</main>
	<footer>
		<p>Based on <a href="http://github.com/cbracco/html5-test-page">HTML5-test-page</a> by cbracco.</p>
	</footer>
</body>

</html>
`

const DemoPage: React.FC<DemoPageProps> = ({ cssStylesheet, updateCss }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Update the iframe content whenever the CSS changes
    useEffect(() => {
        if (iframeRef.current) {
            // Replace the placeholder {cssStylesheet} in the template with the actual CSS content

            // Access the iframe's document and write the updated HTML string
            const iframeDoc = iframeRef.current.contentDocument;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(htmlStringPre);
                iframeDoc.write(`<style>${cssStylesheet}</style>`);
                iframeDoc.write(htmlStringPost);
                iframeDoc.close();
            }
        }
    }, [cssStylesheet]); // Re-run effect when cssStylesheet is updated

    return (
        <Container fluid>
            <Row>
                <Col>
                    {/* iFrame for rendering HTML */}
                    <iframe
                        ref={iframeRef}
                        title={"Demo Page"}
                        style={{ width: '100vw', height: '100vh' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default DemoPage;