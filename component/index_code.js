import React from "react";
import Highlight from 'react-highlight';

function IndexCode() {
    var sb = "// My self introduction\n" +
        "const current_job = 'R&D Programmer Supervisor';\n\n" +
        "const language = [\n" +
        "   'Go', 'C#','VB.NET', 'PHP',\n" +
        "   'Java', 'Swift', 'Java Script',\n" +
        "   'Type Script', 'Dart'\n" +
        "];\n\n" +
        "const framework_or_tools = [\n" +
        "   'NextJS', 'ReactJS', 'ASP.NET MVC','ASP.NET Core',\n" +
        "   'Laravel', 'Android Studio',\n" +
        "   'Xcode', 'Angular', 'Flutter'\n" +
        "];";

    return (
        <>
            <Highlight className='javascript'>
                {sb}
            </Highlight>

        </>
    );
}

export default IndexCode;