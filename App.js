import {useState} from 'react';
import data from './data';

const App = () => {
	const [value, setValue] = useState(0);
	const [text, setText] = useState([]);
	const generateParagraphs = (qnt) => {
		setValue(0);
		if(qnt <= 0){ qnt = 1; }
		if( qnt > 8){ qnt = 8; }
		qnt = parseInt(qnt);

		setText(data.slice(0, qnt));
		
	}


	return (
		<div className="container-fluid">
			<div className="row text-center border mt-5">
				<div className="col-12">
					<h2 className="font-weight-bold">Tired of Borring Lorem Ipsum</h2>
					<p>Paragraphs: <input type="number" className="mt-2" value={value} onChange={(e) => setValue(e.target.value)} style={{width : '80px'}}  /><button className="btn btn-primary btn-sm" onClick={() => generateParagraphs(value)}>GENERATE</button></p>
				</div>
			</div>
			<div className="row">
				<div className="col-6 offset-3">
					{
						text.map((t, index) => {
							return <p key={index}>{t}</p>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default App;