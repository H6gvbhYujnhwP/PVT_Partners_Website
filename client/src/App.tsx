import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import CaseStudies from "./pages/CaseStudies";
import AdvisorDevelopment from "./pages/AdvisorDevelopment";
import StrategicPlanning from "./pages/StrategicPlanning";
import BusinessConsulting from "./pages/BusinessConsulting";

function Router() {
  return (
    <Switch>
      <Route path="/design1" component={Home} />
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/team"} component={Team} />
      <Route path={"/contact"} component={Contact} />

      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/services/advisor-development"} component={AdvisorDevelopment} />
      <Route path={"/services/strategic-planning"} component={StrategicPlanning} />
      <Route path={"/services/business-consulting"} component={BusinessConsulting} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
