# Contributing to AI-Ready Law Firm Landing Page

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/ai-ready-law-firm-2.git
   cd ai-ready-law-firm-2
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔧 Development Workflow

1. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes** thoroughly:
   ```bash
   npm run build  # Ensure the build works
   npm run lint   # Check for linting errors
   ```

4. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### TypeScript/React
- Use TypeScript for all new components
- Follow React functional component patterns with hooks
- Use proper TypeScript types (avoid `any`)
- Keep components focused and single-purpose

### Styling
- Use Tailwind CSS classes for styling
- Follow the existing color scheme and design patterns
- Ensure responsive design (mobile-first approach)
- Test on multiple screen sizes

### File Organization
- Place reusable components in `src/components/`
- Place page components in `src/pages/`
- Use descriptive file and component names
- Keep files focused and under 300 lines when possible

### Code Quality
- Write clean, readable code with meaningful variable names
- Add comments for complex logic
- Remove unused imports and variables
- Follow the existing code formatting

## 🎨 Design Guidelines

- Maintain consistency with the existing design system
- Use the defined color palette (primary green, accent red)
- Follow accessibility best practices (WCAG guidelines)
- Ensure proper contrast ratios for text
- Test with screen readers when possible

## 🧪 Testing

- Test all form functionality
- Verify responsive design on different devices
- Check browser compatibility (Chrome, Firefox, Safari, Edge)
- Test the build process before submitting

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code builds without errors (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] Changes are tested on multiple screen sizes
- [ ] Forms work correctly (if applicable)
- [ ] No console errors in browser

### PR Description
Please include:
- **What**: Brief description of changes
- **Why**: Reason for the changes
- **How**: How the changes were implemented
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes (before/after)

### Example PR Template
```markdown
## What
Added a new testimonial section to the landing page

## Why
To increase social proof and conversion rates

## How
- Created new Testimonials component
- Added testimonial data
- Integrated with existing design system

## Testing
- Tested on desktop and mobile
- Verified accessibility with screen reader
- Checked form functionality still works

## Screenshots
[Include before/after screenshots for UI changes]
```

## 🐛 Bug Reports

When reporting bugs, please include:
- **Browser and version**
- **Device/OS**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)

## 💡 Feature Requests

For feature requests, please:
- Check if the feature already exists
- Explain the use case and benefit
- Provide mockups or examples if possible
- Consider the impact on existing functionality

## 📞 Questions?

If you have questions about contributing:
- Check existing issues and discussions
- Create a new issue with the "question" label
- Reach out to the maintainers

## 🙏 Recognition

Contributors will be recognized in the project README and release notes. Thank you for helping make this project better!

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).