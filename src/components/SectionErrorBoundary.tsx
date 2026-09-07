import React, { type ReactNode } from "react";

interface SectionErrorBoundaryProps {
  children: ReactNode;
  name: string;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
}

export class SectionErrorBoundary extends React.Component<SectionErrorBoundaryProps, SectionErrorBoundaryState> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SectionErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-error">
          <div className="section-error__inner">
            <p>Something went wrong loading the {this.props.name} section.</p>
            <button className="btn btn--primary btn--small" onClick={() => this.setState({ hasError: false })}>
              Try Again
            </button>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
