const ToolboxList = (tool) => {
    return(
        <li key={tool.id}>
            <img style={{width: "65px"}} src={tool.icon} alt={tool.name} />
            <p style={{marginTop: "12px"}}>{tool.name}</p>
        </li>
    )
}

export default ToolboxList