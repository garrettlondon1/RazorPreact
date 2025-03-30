
namespace RazorPreact.lib;

public static class ReactEx
{
    public static string ScriptName(this Type componentType)
    {
        var componentNamespace = componentType.Namespace;
		Console.WriteLine(componentNamespace);
        var namespacePath = componentNamespace.Replace(".", "/").Replace("RazorPreact/", "");
        var componentName = componentType.Name;
        return $"{namespacePath}/{componentName}";
    }
}