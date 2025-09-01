'use client'

import { Button } from '@/components/ui/button';
import { Bug } from 'lucide-react';
import Link from 'next/link';

interface IssueButtonProps {
  componentName: string;
  registryUrl?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const IssueButton = ({ 
  componentName, 
  registryUrl, 
  variant = 'outline',
  size = 'default',
  className 
}: IssueButtonProps) => {
  const generateIssueUrl = () => {
    const baseUrl = 'https://github.com/clumpui/clumpui/issues/new';
    
    // Format component name for display
    const formattedComponentName = componentName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create issue title
    const title = `Bug Report: ${formattedComponentName} Component`;
    
    // Create detailed issue body
    const body = `## Bug Report for ${formattedComponentName}

### Component Information
- **Component Name**: \`${componentName}\`
- **Registry URL**: https://clumpui.amardeep.space/r/${componentName}.json
- **Installation Command**: \`npx shadcn@latest add ${registryUrl || `https://clumpui.amardeep.space/r/${componentName}.json`}\`

### Environment
- **Browser**: 
- **Operating System**: 
- **Node.js Version**: 
- **Package Manager**: 

### Description
<!-- Describe the bug you encountered -->

### Steps to Reproduce
1. Install the component using the command above
2. 
3. 
4. 

### Expected Behavior
<!-- What did you expect to happen? -->

### Actual Behavior
<!-- What actually happened? -->

### Screenshots
<!-- If applicable, add screenshots to help explain the problem -->

### Additional Context
<!-- Add any other context about the problem here -->

### Code Sample
\`\`\`tsx
// Please provide a minimal code example that reproduces the issue
\`\`\`

---
**Component Registry**: [View Component](${registryUrl || `https://clumpui.amardeep.space/components/${componentName}`})
**ClumpUI Version**: Latest`;

    // Encode the URL parameters
    const params = new URLSearchParams({
      title,
      body,
      labels: 'bug,component-issue'
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <Button variant={variant} size={size} className={className} asChild>
        <Link href={generateIssueUrl()} target="_blank" rel="noopener noreferrer">
        <Bug className="h-4 w-4" />
        Report Issue
    </Link>
      </Button>
  );
};

// Feature request button variant
interface FeatureRequestButtonProps {
  componentName: string;
  registryUrl?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const FeatureRequestButton = ({ 
  componentName, 
  registryUrl, 
  variant = 'ghost',
  size = 'sm',
  className 
}: FeatureRequestButtonProps) => {
  const generateFeatureRequestUrl = () => {
    const baseUrl = 'https://github.com/clumpui/clumpui/issues/new';
    
    // Format component name for display
    const formattedComponentName = componentName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create issue title
    const title = `Feature Request: ${formattedComponentName} Component Enhancement`;
    
    // Create detailed issue body
    const body = `## Feature Request for ${formattedComponentName}

### Component Information
- **Component Name**: \`${componentName}\`
- **Registry URL**: ${registryUrl || 'Not provided'}
- **Current Component**: [View Component](${registryUrl || `https://clumpui.amardeep.space/components/${componentName}`})

### Feature Description
<!-- Clearly describe the feature you'd like to see added -->

### Use Case
<!-- Explain the problem this feature would solve -->

### Proposed Solution
<!-- Describe how you think this feature should work -->

### Alternative Solutions
<!-- Describe any alternative solutions or features you've considered -->

### Examples
<!-- If applicable, provide examples of this feature in other libraries or designs -->

### Additional Context
<!-- Add any other context, mockups, or screenshots about the feature request here -->

### Implementation Notes
<!-- If you have ideas about how this could be implemented, share them here -->

---
**Component Registry**: [Current Component](${registryUrl || `https://clumpui.amardeep.space/components/${componentName}`})
**ClumpUI Version**: Latest`;

    // Encode the URL parameters
    const params = new URLSearchParams({
      title,
      body,
      labels: 'enhancement,feature-request'
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <Link href={generateFeatureRequestUrl()} target="_blank" rel="noopener noreferrer">
      <Button variant={variant} size={size} className={className}>
        <span className="mr-2">💡</span>
        Request Feature
      </Button>
    </Link>
  );
};

export default IssueButton;
