using RazorPreact;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddRazorComponents();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Version = "v1",
        Title = "RazorPreact API",
        Description = "An API for the RazorPreact application",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact
        {
            Name = "Garrett London",
            Email = "garrett.london@example.com",
            Url = new Uri("https://github.com/GarrettLondon")
        },
        License = new Microsoft.OpenApi.Models.OpenApiLicense
        {
            Name = "MIT License",
            Url = new Uri("https://opensource.org/licenses/MIT")
        }
    });
});

var app = builder.Build();

app.UseStaticFiles();
app.UseAntiforgery();

// Enable Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Map Razor components
app.MapRazorComponents<Routes>();

// Add fake endpoints
app.MapGet("/api/hello", () => Results.Ok("Hello, World!"));
app.MapGet("/api/time", () => Results.Ok(DateTime.UtcNow));
app.MapPost("/api/echo", (string message) => Results.Ok($"You said: {message}"));

app.Run();
