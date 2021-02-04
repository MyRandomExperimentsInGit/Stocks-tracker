#For now, let these functions be here. If they increase (i hope they do, we can move it to a new setuphelper.ps1)
function Install-Dependencies
{
    pip install YahooFinancials
}

function Setup-BackendEnvironment
{
    [System.Environment]::SetEnvironmentVariable('StocksAppHomeLocation',$PSScriptRoot,[System.EnvironmentVariableTarget]::Machine)
}

Install-Dependencies
Setup-BackendEnvironment