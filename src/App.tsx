/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SkillDetail from './components/SkillDetail';
import CoderLitePage from './components/CoderLitePage';
import { VaultPage } from './components/VaultPage';
import { AuthPage } from './components/AuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vault" element={<VaultPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/skill/ux-researcher-pro" element={<SkillDetail />} />
        <Route path="/skill/coder-lite" element={<CoderLitePage />} />
      </Routes>
    </BrowserRouter>
  );
}
