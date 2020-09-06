import React from 'react'
import { Nav, Dropdown} from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeCode, changeLang, submitCode } from '../../store/actions'
import languages from '../../api/languages.json'
import themes from './theme.json'
import AceEditor from "react-ace";
import 'brace/mode/python';
import 'brace/mode/c_cpp';
import 'brace/mode/java';
import 'brace/theme/github';
import 'brace/theme/chrome';
import 'brace/theme/cobalt';
import 'brace/theme/xcode';
import 'brace/theme/terminal';
import 'brace/theme/textmate';
import 'brace/theme/twilight';
import "brace/ext/language_tools";
import 'brace/snippets/python';
import 'brace/snippets/c_cpp';
import 'brace/snippets/java';

import "./index.css"

class Main extends React.Component {
    state = {
        editorCode: '// type your code here...',
        editorTheme: 'TextMate',
        editorLang: languages[0].name
    }
    editor = React.createRef()
    changeLang(eventKey) {
        this.props.changeLang(eventKey);
        this.setState({
            editorLang: eventKey
        })
    }
    changeTheme(eventKey) {
        this.setState({
            editorTheme: eventKey
        })
    }
    onEditorChange(newValue, e) {
        this.props.changeCode(newValue)
    }
    
    
    editorDidMount(editor, monaco) {
        editor.focus();
        editor.addAction({
            
            run: (ed) => {
                if (ed.getValue() === '') {
                    alert('Type some code to run')
                    return
                }
                let { submitCode, editor: editorState } = this.props;
                submitCode(editorState)
                return null;
            }
        })
    }
    render() {
        
        const code = this.state.code;
        
        let langs = languages.map(lang => lang.name)
        let thems = themes.map(thm => thm.name)
        let lang = this.state.editorLang.split(' ')[0].toLowerCase();
        let thm = this.state.editorTheme.split(' ')[0].toLowerCase();
        if (lang === "c++")
            lang = 'c_cpp'
        if (lang === "c")
            lang = 'c_cpp'
        return (
            <>
                <Nav className="justify-content-between">
                    <Dropdown >
                        <Dropdown.Toggle variant="dark">{this.state.editorLang}</Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: "75vh", overflowY: "auto" }}>
                            {langs.map(lang => {
                                return (<Dropdown.Item
                                    key={lang}
                                    eventKey={lang}
                                    onSelect={this.changeLang.bind(this)}
                                    active={this.state.editorLang === lang}>
                                    {lang}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown >
                        <Dropdown.Toggle variant="dark">{this.state.editorTheme}</Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: "75vh", overflowY: "auto" }}>
                            {thems.map(thm => {
                                return (<Dropdown.Item
                                    key={thm}
                                    eventKey={thm}
                                    onSelect={this.changeTheme.bind(this)}
                                    active={this.state.editorTheme === thm}>
                                    {thm}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Nav>
                 <AceEditor
                    className="borderborder-primary"
                    ref={this.editor}
                    width="100%"
                    height="450px"
                    mode={lang}
                    theme={thm}
                    value={code}
                    wrapEnabled={false}
                    fontSize='20pt'
                    
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={this.onEditorChange.bind(this)}
                    editorDidMount={this.editorDidMount.bind(this)}
                />
                
                {/* Footer */}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(
    mapStateToProps,
    { changeCode, changeLang, submitCode }
)(Main)