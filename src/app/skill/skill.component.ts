import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input()
  name: string = "";

  @Input()
  logo: string = "";

  @Input()
  site: string = "";
}
