using Microsoft.AspNetCore.Http.HttpResults;
using RazorPreact;
using RazorPreact.Pages.Dashboard;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();
app.MapRazorComponents<Routes>();

app.Run();
