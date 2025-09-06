import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; // ✅ accepts error properly
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-red-600">
                ⚠️ Oops! Something went wrong
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700">{this.state.error?.message}</p>

              <Button onClick={this.handleReload} className="w-full">
                🔄 Reload Page
              </Button>

              <Button
                onClick={this.handleGoHome}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                🏠 Go Home
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
export { ErrorBoundary };