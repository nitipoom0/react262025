import './Hello.css';
export default function Hello ({name,age=20}){
    return (<>
    <h1>Hello {name} {age} </h1>
    <div id = "email">email: nitipoom.oh@ku.th</div>
    <div class="box yellow-bg">Tel:0991274147</div>
    </>);
}