const ToolboxList = (tool) => {
    return(
        <li key={tool.id}>
            <img src={tool.icon} alt={tool.name} />
            <p>{tool.name}</p>
        </li>
    )
}

export default ToolboxList