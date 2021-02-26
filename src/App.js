import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";

const marked = require("marked");

const AppContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #d0e2db;
`;

const Title = styled.div`
	font-size: 2.5em;
	text-align: center;
	color: palevioletred;
	font-family: "Monaco", monospace;
	font-weight: 700;
	margin: 1em;
`;

const StyledFormLabel = styled(Form.Label)`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
	font-family: "Montserrat", monospace;
	padding: 1em;
	border-bottom: 2px solid palevioletred;
	width: 100%;
`;

const StyledFormControl = styled(Form.Control)`
	resize: none;
	border: none;
	outline: none;
	width: 100%;
	height: 60vh;
	padding-top: 1em;
	background-color: #d0e2db;
`;

const StyledCol = styled(Col)`
	border-right: 2px solid palevioletred;
	margin-bottom: 4em;
`;

const Cheatsheet = styled.div`
	height: 20em;
	width: 70vw;
	margin: 2em 0;
	padding: 2em;
	border: 2px solid palevioletred;
	border-radius: 15px;
	overflow-y: scroll;
`;

function App() {
	const [markdown, setMarkdown] = useState("");
	const [cheatsheet, setCheatsheet] = useState(false);
	const [HTML, setHTML] = useState(false);

	return (
		<AppContainer>
			<Title>Markdown Editor</Title>
			<div>
				<Button
					href="#cheatsheet"
					variant="secondary mb-4 mr-2"
					onClick={(e) => setCheatsheet(!cheatsheet)}
				>
					Markdown Cheatsheet{" "}
				</Button>
				<Button variant="secondary mb-4" onClick={(e) => setHTML(!HTML)}>
					HTML
				</Button>
			</div>
			<div className="container">
				<div className="row">
					<StyledCol>
						<Form>
							<Form.Group controlId="formControlTextArea">
								<StyledFormLabel>Enter text:</StyledFormLabel>
								<StyledFormControl
									as="textarea"
									value={markdown}
									onChange={(e) => setMarkdown(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</StyledCol>
					<div className="col">
						<StyledFormLabel>Markdown text</StyledFormLabel>

						<div
							dangerouslySetInnerHTML={{
								__html: marked(markdown, { breaks: true }),
							}}
							style={{ paddingTop: "1em" }}
						></div>
					</div>
					{HTML && (
						<div
							className="col"
							style={{
								borderLeft: "2px solid palevioletred",
							}}
						>
							<StyledFormLabel>HTML</StyledFormLabel>

							<div>{marked(markdown)}</div>
						</div>
					)}
				</div>
			</div>
			{cheatsheet && (
				<Cheatsheet id="cheatsheet">
					<h4>Headers</h4>
					<div>
						<div>
							<code>
								<p># This is an `&lt;h1&gt;` tag</p>
								<p>## This is an `&lt;h2&gt;` tag</p>
								<p>### This is an `&lt;h3&gt;`; tag</p>
							</code>
						</div>
					</div>
					<h4>Emphasis</h4>
					<div>
						<div>
							<code>
								<p>*This text will be italic*</p>
								<p>_This will also be italic_</p>

								<p>**This text will be bold**</p>
								<p>__This will also be bold__</p>

								<p>_You **can** combine them_</p>
							</code>
						</div>
					</div>
					<h4>Unordered list</h4>
					<div>
						<div>
							<code>
								<p>* Item 1</p>
								<p>* Item 2</p>
								<p>* Item 2a</p>
								<p>* Item 2b</p>
							</code>
						</div>
					</div>
					<h4>Ordered list</h4>
					<div>
						<div>
							<code>
								<p>1. Item 1</p>
								<p>2. Item 2</p>
								<p> 3. Item 2a</p>
								<p> 4. Item 2b</p>
							</code>
						</div>
					</div>
					<h4>Images</h4>
					<div>
						<div>
							<code>
								<p>
									![This App was buiilt in
									React](https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png)
								</p>
							</code>
						</div>
					</div>
					<h4>Links</h4>
					<div>
						<div>
							<code>
								<p> https://www.markdownguide.org/basic-syntax/ automatic!</p>
								<p>
									[Basic Syntax](https://www.markdownguide.org/basic-syntax/)
								</p>
							</code>
						</div>
					</div>
					<h4>Blockquotes</h4>
					<div>
						<div>
							<code>
								<p>
									> Dorothy followed her through many of the beautiful rooms in
									her castle.
								</p>
							</code>
						</div>
					</div>
					<h4>Inline code</h4>
					<div>
						<div>
							<code>
								<p>
									I think you should use an `&lt;addr&gt;` element here instead.
								</p>
							</code>
						</div>
					</div>
					<h4>Multiline code</h4>
					<code>
						<p>```</p>
						<p>let y = 1</p>
						<p>let x = 1</p>
						<p>let z = y + x</p>
						<p>``` </p>
					</code>
				</Cheatsheet>
			)}
		</AppContainer>
	);
}

export default App;
